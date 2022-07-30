const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Journal extends Model {}

Journal.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        entry: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        //user id
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
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'journal',
    }
);

module.exports = Journal;