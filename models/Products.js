const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Products extends Model {}


module.exports = Products;
