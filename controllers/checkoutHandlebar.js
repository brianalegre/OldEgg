const router = require('express').Router();
const { Carts, Products, Users } = require('../models');
const loggedIn = require('../utils/auth');

router.get('/checkout', loggedIn, async (req, res) => {
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

    const hasItems = cartProducts.length > 0 ? true : false;
    const subTotal = cartProducts
      .map((product) => {
        return Number(product.price);
      })
      .reduce((a, b) => a + b, 0);

    const userInfo = await Users.findAll({
      where: { user_id: req.session.user_id },
    });
    const userBalance = userInfo.map(
      (product) => product.get({ plain: true }).balance
    )[0];

    res.render('checkout', {
      cartProducts,
      hasItems,
      subTotal,
      userBalance,
      logged_in: req.session.logged_in, 
      cart_count: req.session.cart_count
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/checkout', loggedIn, async (req, res) => {
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
    const checkEmptyStock = cartProducts.filter(
      (product) => product.stock === 0
    );

    const subTotal = cartProducts
      .map((product) => {
        return Number(product.price);
      })
      .reduce((a, b) => a + b, 0);

    const userInfo = await Users.findAll({
      where: { user_id: req.session.user_id },
    });
    const userBalance = userInfo.map(
      (product) => product.get({ plain: true }).balance
    )[0];

    const resultingUserBalance = Number(userBalance) - Number(subTotal);
    const checkPayment = resultingUserBalance < 0 ? false : true;

    // Error 1 = insufficient bal, Error 2 = stock is empty for item
    if (!checkPayment) {
      return res
        .status(400)
        .json({ error: 0, message: 'Insufficient balance amount.' });
      // If there are empty stocks we res.send the array of empty stocked items
    } else if (checkEmptyStock.length > 0) {
      const emptyStockNames = checkEmptyStock
        .map((product) => product.product_name)
        .join(', ');
      return res.status(400).json({
        error: 1,
        message: `Empty stock for items: ${emptyStockNames}`,
      });
    }
    await Users.update(
      { balance: resultingUserBalance },
      { where: { user_id: req.session.user_id } }
    );
    // Decrementing the stock
    cartProducts.forEach(async (product) => {
      await Products.update(
        { stock: product.stock - 1 },
        { where: { product_id: product.product_id } }
      );
    });
    //destroying current cart items for the user
    await Carts.destroy({ where: { user_id: req.session.user_id } });
    res.status(200).json(resultingUserBalance);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
