const { Carts } = require('../models');

const cartsData = [
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

const seedCarts = () => Carts.bulkCreate(cartsData);

module.exports = seedCarts;
