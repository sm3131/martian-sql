const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Martian extends Model {}

Martian.init(
    {
        martian_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        base_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'base',
                key: 'base_id'
            }
        },
        super_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'martian',
                key: 'martian_id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'martian'
    }
);

module.exports = Martian;