const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Inventory extends Model {}

Inventory.init(
    {
        base_id: {
            type: DataTypes.INTEGER,
            references: {
                model:'base',
                key:'base_id'
            }
        },
        supply_id: {
            type: DataTypes.INTEGER,
            references: {
                model:'supply',
                key:'supply_id'
            }
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
        modelName: 'inventory'
    }
);

module.exports = Inventory;