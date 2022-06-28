const { Users } = require('../models');

const usersData = [
  {
    username: 'brianalegre714',
    first_name: 'Brian',
    last_name: 'Alegre',
    email: 'brianalegre@gmail.com',
    password: 'iLoveCats321',
    // cart_id: 1,
    // view_history: [3, 2, 6]
  },
  {
    username: 'alleciscool',
    first_name: 'Allec',
    last_name: 'Arzadon',
    email: 'allecarzadon@gmail.com',
    password: 'allec321arzadon',
  },
  {
    username: 'kevzlegit69',
    first_name: 'Kevin',
    last_name: 'Lazaro',
    email: 'kevinlazaro@gmail.com',
    password: '2Legit2Quit',
    balance: 405.5,
    // cart_id: 2,
    // view_history: 6
  },
  {
    username: 'tonytwotapper',
    first_name: 'Tony',
    last_name: 'Vallescas',
    email: 'tonytwotapper@gmail.com',
    password: '360NoScoper1',
    balance: 131.0,
  },
];

const seedUsers = () => Users.bulkCreate(usersData);

module.exports = seedUsers;
