const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Supply extends Model {}

Supply.init(
    {
        supply_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        supply_name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        quantity: {
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'supply'
    }
);

module.exports = Supply;