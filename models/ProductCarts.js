const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ProductCarts extends Model { }

ProductCarts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'products',
        key: 'product_id',
      },
    },
    cart_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'carts',
        key: 'cart_id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'productcarts',
  }
);

module.exports = ProductCarts;
