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
    category_name: 'Motherboards',
  },
  {
    category_name: 'Storage',
  },
  {
    category_name: 'CPU / Processors',
  },
  {
    category_name: 'Memory',
  },
  {
    category_name: 'Power Supply',
  },
  {
    category_name: 'Fans & PC Cooling',
  },
];

const seedCategories = () => Categories.bulkCreate(categoriesData);

module.exports = seedCategories;