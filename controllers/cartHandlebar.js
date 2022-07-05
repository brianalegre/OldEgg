const router = require('express').Router();
const { Carts, Products } = require('../models');

router.get('/cart', async (req, res) => {
    try {
      const dbCartData = await Carts.findOne({where: {user_id: req.session.user_id}})
      const cartProducts = dbCartData.map(product => product.get({plain:true}))

      res.render('cart', {
        cartProducts,
        logged_in: req.session.logged_in
      })
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
});

// router.post('/cart', async (req, res) => {
//     try {
//       const currentProduct = await Products.findOne({where: {product_id: req.body.productId}})
//       const cartData = await Carts.findOne({where: {user_id: req.session.user_id}})
//       if (cartData === null) {
//         // Carts.create
//       }
//     //   console.log(currentProduct, 'THIS IS CURRENT PRODUCT!!!!')
//     } catch (err) {

//     }
// });

module.exports = router;