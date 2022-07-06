const sequelize = require('../config/connection');
const seedCategories = require('./categoriesSeeds');
const seedProducts = require('./productsSeeds');
const seedUsers = require('./usersSeeds');
const seedCarts = require('./cartsSeeds');

const seedAll = async () => {
  try {
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
  } catch(err) {
    console.log(err)
  }
  process.exit(0);
};

seedAll();