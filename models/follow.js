const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Follow extends Model {}

Follow.init(
    {
        //following
        //followed
    }
);

module.exports = Follow;