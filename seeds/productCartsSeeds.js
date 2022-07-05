const { ProductCarts } = require('../models');

const productCartsData = [
  {
    product_id: 1,
    cart_id: 1,
  },
  {
    product_id: 2,
    cart_id: 1,
  },
  {
    product_id: 3,
    cart_id: 1,
  },
  {
    product_id: 4,
    cart_id: 1,
  },
  {
    product_id: 4,
    cart_id: 2,
  },
];

const seedProductCarts = () => ProductCarts.bulkCreate(productCartsData);

module.exports = seedProductCarts;
