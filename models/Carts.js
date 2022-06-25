const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Carts extends Model {}


module.exports = Carts;
