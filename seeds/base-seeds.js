const { Base } = require('../models');

const baseData = [
    {
        base_name: 'Tharsisland', 
        founded: '2037-06-03'
    },
    {
        base_name: 'Valles Marineris 2.0', 
        founded: '2040-12-01'
    },
    {
        base_name: 'Gale Cratertown', 
        founded: '2041-08-1'
    },
    {
        base_name: 'New New New York', 
        founded: '2042-02-10'
    },
    {
        base_name: 'Olympus Mons Spa & Casino', 
        founded: null
    }
]

const seedBases = () => Base.bulkCreate(baseData);

module.exports = seedBases;