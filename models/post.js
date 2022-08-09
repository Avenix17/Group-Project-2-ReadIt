const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
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
        username: {
            type: DataTypes.STRING,
            references: {
              model: 'user',
              key: 'username',
            },
        },
        reply_to: {
            type: DataTypes.INTEGER,
            references: {
                model: 'post',
                key: 'id'
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
    }
);

module.exports = Post;