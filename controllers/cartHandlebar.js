const router = require('express').Router();
const { Carts, Products } = require('../models');
const loggedIn = require('../utils/auth');
const checkoutHandlebar = require('./checkoutHandlebar');

// For checkout route = /cart/checkout
router.use('/cart', checkoutHandlebar);

router.get('/cart', loggedIn, async (req, res) => {
  try {
    // Grabbing cart data and mapping it into an array of product ids
    const dbCartData = await Carts.findAll({
      where: { user_id: req.session.user_id },
    });
    const cartProductsIds = dbCartData.map(
      (product) => product.get({ plain: true }).product_id
    );

    // Grabbing product information for each product in the cart product ids
    const dbProductInfo = await Products.findAll({
      where: { product_id: cartProductsIds },
    });
    const cartProducts = dbProductInfo.map((product) =>
      product.get({ plain: true })
    );

    const cartProdLength = cartProducts.length;
    const hasItems = cartProdLength > 0 ? true : false;
    req.session.cart_count = cartProdLength;

    const subTotal = cartProducts
      .map((product) => {
        return Number(product.price);
      })
      .reduce((a, b) => a + b, 0);

    res.render('cart', {
      cartProducts,
      cartProdLength,
      subTotal,
      hasItems,
      logged_in: req.session.logged_in,
      cart_count: req.session.cart_count,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/cart', async (req, res) => {
  try {
    const loggedIn = !!req.session.logged_in;
    if (!loggedIn) {
      return res.status(401).json(loggedIn);
    }

    const checkProduct = await Carts.findAll({
      where: {
        user_id: req.session.user_id,
        product_id: req.body.productId,
      },
    });

    if (!!checkProduct) {
      const cartData = await Carts.create({
        user_id: req.session.user_id,
        product_id: req.body.productId,
      });
      const dbCartData = await Carts.findAll({
        where: { user_id: req.session.user_id },
      });
      const carts = dbCartData.map((product) => product.get({ plain: true }));
      req.session.cart_count = carts.length;
      return res.status(200).json(cartData);
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/cart', loggedIn, async (req, res) => {
  try {
    const delData = await Carts.destroy({
      where: {
        user_id: req.session.user_id,
        product_id: req.body.productId,
      },
    });
    const dbCartData = await Carts.findAll({
      where: { user_id: req.session.user_id },
    });
    const carts = dbCartData.map((product) => product.get({ plain: true }));
    req.session.cart_count = carts.length;
    return res.status(200).json(delData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
