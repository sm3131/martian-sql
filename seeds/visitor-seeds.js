const { Visitor } = require('../models');

const visitorData = [
    {
        host_id: 7, 
        first_name: 'George', 
        last_name: 'Ambrose'
    },
    {
        host_id: 1, 
        first_name: 'Kris', 
        last_name: 'Cardenas'
    },
    {
        host_id: 9, 
        first_name: 'Priscilla', 
        last_name: 'Lane'
    },
    {
        host_id: 11, 
        first_name: 'Jane', 
        last_name: 'Thornton'
    },
    {
        host_id: null, 
        first_name: 'Doug', 
        last_name: 'Stavenger'
    },
    {
        host_id: null, 
        first_name: 'Jamie', 
        last_name: 'Waterman'
    },
    {
        host_id: 8, 
        first_name: 'Martin', 
        last_name: 'Humphries'
    }
]

const seedVisitors = () => Visitor.bulkCreate(visitorData);

module.exports = seedVisitors;