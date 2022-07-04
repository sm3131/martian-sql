const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Visitor extends Model {}

Visitor.init(
    {
        visitor_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        host_id: {
            type: DataTypes.INTEGER,
            references: {
                model:'martian',
                key:'martian_id'
            }
        },
        first_name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'visitor'
    }
);

module.exports = Visitor;