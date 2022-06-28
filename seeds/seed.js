const sequelize = require('../config/connection');
const seedCategories = require('./categories-seeds');
const seedProducts = require('./products-seeds');
const seedUsers = require('./users-seeds');
const seedCarts = require('./carts-seeds');

const seedAll = async () => {

  await sequelize.sync({ force: true });
  console.log('--- DB SYNCED! ---');
  await seedCategories();
  console.log('--- CATEGORIES SEEDED! ---');

  await seedProducts();
  console.log('--- PRODUCTS SEEDED! ---');

  await seedUsers();
  console.log('--- USERS SEEDED! ---');

  await seedCarts();
  console.log('--- CARTS SEEDED! ---');

  process.exit(0);
};

seedAll();