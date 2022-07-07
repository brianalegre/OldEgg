const router = require('express').Router();
const { Carts, Products, Users } = require('../models');
const loggedIn = require('../utils/auth');

router.get('/checkout', loggedIn, async (req, res) => {
    try {
        // Grabbing cart data and mapping it into an array of product ids
        const dbCartData = await Carts.findAll({where: {user_id: req.session.user_id}})
        const cartProductsIds = dbCartData.map(product => product.get({plain:true}).product_id)

        // Grabbing product information for each product in the cart product ids
        const dbProductInfo = await Products.findAll({where: {product_id: cartProductsIds}})
        const cartProducts = dbProductInfo.map(product => product.get({plain:true}))

        const hasItems = cartProducts.length > 0 ? true : false
        const subTotal = cartProducts.map(product=> {
        return parseInt(product.price)
        }).reduce((a,b) => a+b, 0)

        const userInfo = await Users.findAll({where: {user_id: req.session.user_id}})
        const userBalance = userInfo.map(product => product.get({plain:true}).balance)[0]

        res.render('checkout', {
            hasItems,
            subTotal,
            userBalance,
            logged_in: req.session.logged_in
        })
    } catch(err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.post('/checkout', loggedIn, async (req, res) => {
    try {
        // Grabbing cart data and mapping it into an array of product ids
        const dbCartData = await Carts.findAll({where: {user_id: req.session.user_id}})
        const cartProductsIds = dbCartData.map(product => product.get({plain:true}).product_id)

        // Grabbing product information for each product in the cart product ids
        const dbProductInfo = await Products.findAll({where: {product_id: cartProductsIds}})
        const cartProducts = dbProductInfo.map(product => product.get({plain:true}))

        const subTotal = cartProducts.map(product=> {
        return parseInt(product.price)
        }).reduce((a,b) => a+b, 0)

        const userInfo = await Users.findAll({where: {user_id: req.session.user_id}})
        const userBalance = userInfo.map(product => product.get({plain:true}).balance)[0]

        const resultingUserBalance = parseInt(userBalance) - parseInt(subTotal);
        const checkPayment = resultingUserBalance < 0 ? false : true
        console.log(resultingUserBalance, 'THIS IS CURRENT BALANCE')
        if (!checkPayment) {
            return res.status(400).json('Insufficient balance amount.')
        }
        await Users.update(
            { balance: resultingUserBalance },
            { where: {user_id: req.session.user_id} }
        )
        await Carts.destroy({where: {user_id: req.session.user_id}})
        res.status(200).json(resultingUserBalance)
    } catch(err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router;