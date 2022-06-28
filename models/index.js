//import the example model
const Users = require('./Users');
const Categories = require('./Categories');
const Products = require('./Products');
const Carts = require('./Carts');

Products.belongsTo(Categories, {
  foreignKey: 'category_id',
});

Categories.hasMany(Products, {
  foreignKey: 'category_id',
});

Carts.belongsTo(Users, {
  foreignKey: 'user_id',
});

Users.hasOne(Carts, {
  foreignKey: 'cart_id',
});

Carts.hasMany(Products, {
  foreignKey: 'product_id',
});

Products.belongsTo(Carts, {
  foreignKey: 'product_id',
});


// Products.belongsToMany(Users, {
//   through: Carts,
// })

// Users.hasMany(Products, {
//   foreignKey: "product_id"
// })

module.exports = {
  Products,
  Categories,
  Users,
  Carts,
};
