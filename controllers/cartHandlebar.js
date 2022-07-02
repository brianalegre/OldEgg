const router = require('express').Router();
const { Carts } = require('../models');

router.get('/cart', async (req, res) => {
    try {
      const cartData = await Carts.findOne({where: {user_id: req.session.user_id}})
      console.log(cartData)
      res.render('cart', {
        cartData,
        logged_in: req.session.logged_in
      })
    } catch (err) {
      console.log(err)
    }
});

module.exports = router;