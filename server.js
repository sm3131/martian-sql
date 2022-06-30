const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

//express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static())

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}!`);
    });
});