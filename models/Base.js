const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Base extends Model {}

Base.init(
    {
        base_id: {
            type: DataTypes.STRING,
            primaryKey: true,
            autoIncrement: true
        },
        base_name: {
            type: DataTypes.STRING
        },
        founded: {
            type: DataTypes.DATE
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'base'
    }
);

module.exports = Base;