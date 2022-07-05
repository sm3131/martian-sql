const { Supply } = require('../models');

const supplyData = [
    {
        supply_name: 'Solar Panel',
        description: 'Standard 1x1 meter cell',
        quantity: 912
    },
    {
        supply_name: 'Water Filter',
        description: 'Creates drinkable water',
        quantity: 6
    },
    {
        supply_name: 'Duct Tape',
        description: 'Roll of tape',
        quantity: 951
    },
    {
        supply_name: 'Ketchup',
        description: 'Yuck',
        quantity: 206
    },
    {
        supply_name: 'Battery Cell',
        description: 'Battery cell for power grid',
        quantity: 17
    },
    {
        supply_name: 'USB 6.0 Cable',
        description: 'Carbon fiber coated',
        quantity: 42
    },
    {
        supply_name: 'Fuzzy Duster',
        description: 'Cleans the dust',
        quantity: 19
    },
    {
        supply_name: 'Mars Bars',
        description: 'Feeds the martians',
        quantity: 3801
    },
    {
        supply_name: 'Air Filter',
        description: 'Removes dust from the air',
        quantity: 23
    },
    {
        supply_name: "Famous Ray's Frozen Pizza",
        description: 'Yummy pizza',
        quantity: 823
    },
]

const seedSupplies = () => Supply.bulkCreate(supplyData);

module.exports = seedSupplies;