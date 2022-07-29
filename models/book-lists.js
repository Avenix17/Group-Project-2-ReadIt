const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BookLists extends Model {}

BookLists.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      listname: {
        type: DataTypes.STRING,
        allowNull: false,

      },
      public: {
        type: DataTypes.BOOLEAN,
        default: false,
      }
      //User(owner) id
    }
);

module.exports = BookLists;