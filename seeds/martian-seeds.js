const { Martian } = require('../models');

const martianData = [
    {
        first_name: 'Ray',
        last_name:'Bradbury',
        base_id: 1,
        super_id: null
    },
    {
        first_name: 'John', 
        last_name: 'Black',
        base_id: 4,
        super_id: 10
    },
    {
        first_name: 'Samuel',
        last_name: 'Hinkston',
        base_id: 4,
        super_id: 2
    },
    {
        first_name: 'Jeff',
        last_name: 'Spender',
        base_id: 1,
        super_id: 9
    },
    {
        first_name: 'Sam',
        last_name: 'Parkhill',
        base_id: 2,
        super_id: 12
    },
    {
        first_name: 'Elma',
        last_name: 'Parkhill',
        base_id: 3,
        super_id: 8
    },
    {
        first_name: 'Melissa',
        last_name: 'Lewis',
        base_id: 1,
        super_id: 1
    },
    {
        first_name: 'Mark',
        last_name: 'Watney',
        base_id: 3,
        super_id: null
    },
    {
        first_name: 'Beth',
        last_name: 'Johanssen',
        base_id: 1,
        super_id: 1
    },
    {
        first_name: 'Chris',
        last_name: 'Beck',
        base_id: 4,
        super_id: null
    },
    {
        first_name: 'Nathaniel',
        last_name: 'York',
        base_id: 4,
        super_id: 2
    },
    {
        first_name: 'Elon',
        last_name: 'Musk',
        base_id: 2,
        super_id: null
    },
    {
        first_name: 'John',
        last_name: 'Carter',
        base_id: null,
        super_id: 8
    },
]

const seedMartians = () => Martian.bulkCreate(martianData);

module.exports = seedMartians;