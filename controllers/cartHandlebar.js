const router = require('express').Router();
const { Carts, Products } = require('../models');

router.get('/cart', async (req, res) => {
    try {
      // Grabbing cart data and mapping it into an array of product ids
      const dbCartData = await Carts.findAll({where: {user_id: req.session.user_id}})
      const cartProductsIds = dbCartData.map(product => product.get({plain:true}).product_id)

      // Grabbing product information for each product in the cart product ids
      const dbProductInfo = await Products.findAll({where: {product_id: cartProductsIds}})
      const cartProducts = dbProductInfo.map(product => product.get({plain:true}))

      console.log(cartProducts, 'THIS IS CART DATA FROM DB')
      res.render('cart', {
        cartProducts,
        logged_in: req.session.logged_in
      })
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
});

router.post('/cart', async (req, res) => {
    try {
      const currentProduct = await Products.findOne({where: {product_id: req.body.productId}})
      const cartData = await Carts.findOne({where: {user_id: req.session.user_id}})
      if (cartData === null) {
        // Carts.create
      }
    //   console.log(currentProduct, 'THIS IS CURRENT PRODUCT!!!!')
    } catch (err) {

    }
});

module.exports = router;