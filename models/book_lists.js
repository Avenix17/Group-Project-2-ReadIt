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
      },
      //User(owner) id
      username: {
        type: DataTypes.STRING,
        references: {
          model: 'user',
          key: 'username',
        },
      }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'book_lists',
      }
);

module.exports = BookLists;