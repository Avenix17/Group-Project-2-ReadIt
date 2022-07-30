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
      bookdescription: {
        type: DataTypes.STRING,
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
      //List name
      list_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'book_lists',
          key: 'id',
        },
      }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'list_items',
    }
);

module.exports = ListItems;