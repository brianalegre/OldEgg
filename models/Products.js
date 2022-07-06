const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Products extends Model { }

Products.init(
  {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    description: {
      //using dataType character count
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      //added arguments to decimal for accuracy.
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    date_posted: {
      //formatted to 'YYYY-MM-DD'
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    product_img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'categories',
        key: 'category_id',
      },
    },
    // cart_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   defaultValue: null;
    //   references: {
    //     model: 'carts',
    //     key: 'cart_id',
    //   },
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'products',
  }
);

module.exports = Products;
