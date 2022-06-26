const { Categories } = require('../models');

const categoriesData = [
  {
    category_name: 'Monitors',
  },
  {
    category_name: 'Graphic Cards',
  },
  {
    category_name: 'Computer Cases',
  },
  {
    category_name: 'Mother Boards',
  },
  {
    category_name: 'Memory',
  },
  {
    category_name: 'CPU / Processors',
  },
];

const seedCategories = () => Categories.bulkCreate(categoriesData);

module.exports = seedCategories;