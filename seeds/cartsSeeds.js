const { Carts } = require('../models');

const cartsData = [
  {
    user_id: 1,
    total_price: 199.5,
  },
  {
    user_id: 3,
    total_price: 286.98,
  },
  {
    user_id: 4,
    total_price: 199.5,
  },
];

const seedCarts = () => Carts.bulkCreate(cartsData);

module.exports = seedCarts;
