const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Follow extends Model {}

Follow.init(
    {
        //Current User
        username: {
            type: DataTypes.STRING,
            references: {
              model: 'user',
              key: 'username',
            },
        },
        //Who the current user is following
        followed_username: {
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
        modelName: 'follow',
    }
);

module.exports = Follow;