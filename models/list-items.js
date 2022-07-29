const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ListItems extends Model {}

ListItems.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      booktitle: {
        type: DataTypes.STRING,
        allowNull: false,

      },
      bookinfo: {
        type: DataTypes.JSON, //summary, reviews, etc?
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      //List id
    }
);

module.exports = ListItems;