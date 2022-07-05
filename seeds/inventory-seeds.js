const { Inventory } = require('../models');

const inventoryData = [
    {
        base_id: 1, 
        supply_id: 1, 
        quantity: 8
    },
    {
        base_id: 1, 
        supply_id: 3, 
        quantity: 5
    },
    {
        base_id: 1, 
        supply_id: 5, 
        quantity: 1
    },
    {
        base_id: 1, 
        supply_id: 6, 
        quantity: 2
    },
    {
        base_id: 1, 
        supply_id: 8, 
        quantity: 12
    },
    {
        base_id: 1, 
        supply_id: 9, 
        quantity: 1
    },
    {
        base_id: 2, 
        supply_id: 4, 
        quantity: 5
    },
    {
        base_id: 2, 
        supply_id: 8, 
        quantity: 62
    },
    {
        base_id: 2, 
        supply_id: 10, 
        quantity: 37
    },
    {
        base_id: 3, 
        supply_id: 2, 
        quantity: 11
    },
    {
        base_id: 3, 
        supply_id: 7, 
        quantity: 2
    },
    {
        base_id: 4, 
        supply_id: 10, 
        quantity: 91
    },
]

const seedInventory = () => Inventory.bulkCreate(inventoryData);

module.exports = seedInventory;