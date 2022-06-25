//the MODEL of the MVC, define all data logic and relations here

//import the example model

const Users = require('./Users')
const Categories = require('./Categories')
const Products = require('./Products')
const Carts = require('./Carts')


module.exports = {
    Products,
    Categories,
    Users,
    Carts,
  };
