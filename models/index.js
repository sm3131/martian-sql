//import models
const Martian = require('./Martian');
const Base = require('./Base');
const Supply = require('./Supply');
const Inventory = require('./Inventory');
const Visitor = require('./Visitor');

//Base has MANY Martians 
Base.hasMany(Martian, {
    foreignKey: 'base_id'
});

//Martian belongsTo ONE Base
Martian.belongsTo(Base, {
    foreignKey: 'base_id'
});

//Martian has MANY Visitor
Martian.hasMany(Visitor, {
    foreignKey: 'host_id'
});

//Visitor belongs to ONE Martian
Visitor.belongsTo(Martian, {
    foreignKey: 'host_id'
});

//Base belongs to MANY Supply
Base.belongsToMany(Supply, {
    through: Inventory,
    foreignKey: 'base_id'
});

//Supply belongs to MANY Base
Supply.belongsToMany(Base, {
    through: Inventory,
    foreignKey: 'supply_id'
});
