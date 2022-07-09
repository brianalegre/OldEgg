//import the example model
const Users = require('./Users');
const Categories = require('./Categories');
const Products = require('./Products');
const Carts = require('./Carts');
const Wishlist = require('./Wishlist');

Users.hasMany(Carts, {
  foreignKey: 'user_id',
});

Users.hasMany(Wishlist, {
  foreignKey: 'user_id',
});

Carts.belongsTo(Users, {
  foreignKey: 'user_id',
});

Wishlist.belongsTo(Users, {
  foreignKey: 'user_id',
});

Carts.hasMany(Products, {
  foreignKey: 'product_id',
});

Wishlist.hasMany(Products, {
  foreignKey: 'product_id',
});

Categories.hasMany(Products, {
  foreignKey: 'category_id',
});

Products.belongsTo(Categories, {
  foreignKey: 'category_id',
});

module.exports = {
  Products,
  Categories,
  Users,
  Carts,
  Wishlist,
};

// Old Unused Code

// Products.belongsTo(Categories, {
//   foreignKey: 'category_id',
// });

// Categories.hasMany(Products, {
//   foreignKey: 'category_id',
// });

// Carts.belongsTo(Users, {
//   foreignKey: 'user_id',
// });

// Users.hasOne(Carts, {
//   foreignKey: 'cart_id',
// });

// Carts.hasMany(Products, {
//   foreignKey: 'product_id',
// });

// Products.belongsTo(Carts, {
//   foreignKey: 'product_id',
// });

// Products.belongsToMany(Users, {
//   through: Carts,
// })

// Users.hasMany(Products, {
//   foreignKey: "product_id"
// })
