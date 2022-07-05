//import the example model
const Users = require('./Users');
const Categories = require('./Categories');
const Products = require('./Products');
const Carts = require('./CartItems');
// const ProductsCarts = require('./ProductsCarts');


Users.hasMany(Carts, {
  foreignKey: 'user_id'
});

Carts.belongsTo(Users, {
  foreignKey: 'user_id'
});

Carts.hasMany(Products, {
  foreignKey: 'product_id'
});

Products.hasMany(Carts, {
  foreignKey: 'product_id'
});

Categories.hasMany(Products, {
  foreignKey: 'category_id',
});

Products.belongsTo(Categories, {
  foreignKey: 'category_id',
});



// Products.belongsToMany(Carts, { through: ProductsCarts });

// Carts.belongsToMany(Products, { through: ProductsCarts });

module.exports = {
  Products,
  Categories,
  Users,
  Carts,
  // ProductsCarts,
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