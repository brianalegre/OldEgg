const { Wishlist } = require('../models');

const wishlistData = [
  {
    user_id: 1,
    product_id: 1
  },
  {
    user_id: 1,
    product_id: 2
  },
  {
    user_id: 1,
    product_id: 3
  },
  {
    user_id: 1,
    product_id: 4
  },
  {
    user_id: 1,
    product_id: 5
  },
];

const seedWishlist = () => Wishlist.bulkCreate(wishlistData);

module.exports = seedWishlist;