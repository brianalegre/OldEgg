const router = require('express').Router();
const { Wishlist, Products } = require('../models');
const loggedIn = require('../utils/auth');

router.get('/wishlist', loggedIn, async (req, res) => {
  try {
    console.log('RUNNING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    // Grabbing wishlist data and mapping it into an array of product ids
    const dbWishlistData = await Wishlist.findAll({where: {user_id: req.session.user_id}})
    const wishlistProductsIds = dbWishlistData.map(product => product.get({plain:true}).product_id)

    // Grabbing product information for each product in the wishlist product ids
    const dbProductInfo = await Products.findAll({where: {product_id: wishlistProductsIds}})
    const wishlistProducts = dbProductInfo.map(product => product.get({plain:true}))
    const wishlistProdLength = wishlistProducts.length
    const hasItems = wishlistProdLength > 0 ? true : false


    res.render('wishlist', {
      wishlistProducts,
      wishlistProdLength,
      subTotal,
      hasItems,
      logged_in: req.session.logged_in
    })
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.post('/wishlist', async (req, res) => {
  try {
    const loggedIn = !!req.session.logged_in
    if (!loggedIn) {
      return res.status(401).json(loggedIn);
    }
    
    const checkProduct = await Wishlist.findAll({
        where: { 
          user_id: req.session.user_id,
          product_id: req.body.productId
        }
      })

    if (!!checkProduct) {
      const wishlistData = await Wishlist.create({
        user_id: req.session.user_id,
        product_id: req.body.productId
      })
      return res.status(200).json(wishlistData);
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/wishlist', loggedIn, async (req, res) => {
  try {
    const delData = await Wishlist.destroy(
      {
        where: {
          user_id: req.session.user_id,
          product_id: req.body.productId
        }
      }
    )
    return res.status(200).json(delData);
  } catch(err) {
    res.status(400).json(err);
  }
})

module.exports = router;