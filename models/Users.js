const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Users extends Model { }

Users.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      //username must be no more than 16 characters
      type: DataTypes.STRING(16),
      allowNull: false,
      unique: true,
    },
    first_name: {
      type: DataTypes.STRING(16),
      allowNull: false,
      validate: {
        isAlphanumeric: true,
      },
    },
    last_name: {
      type: DataTypes.STRING(16),
      allowNull: false,
      validate: {
        isAlphanumeric: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      //password must be atleast 8 characters
      validate: {
        len: [8],
      },
      // },
      // cart_id: {
      //   type: DataTypes.INTEGER,
      //   allowNull: true,
      // references: {
      //   model: 'carts',
      //   key: 'cart_id',
      // },
    },
    balance: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 500.00,
      validate: {
        isDecimal: true,
      },
    },
    // view_history: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   references: {
    //     model: 'products',
    //     key: 'product_id',
    //   },
    // },
  },
  {
    hooks: {
      beforeCreate: async (userData) => {
        userData.username = await userData.username.toLowerCase();
        userData.email = await userData.email.toLowerCase();
        userData.password = await bcrypt.hash(userData.password, 5);
        return userData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'users',
  }
);

module.exports = Users;
