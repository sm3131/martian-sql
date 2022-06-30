const express = require('express');
const PORT = process.env.PORT || 3001;
//const routes = 
const app = express();

//express middleware
app.use(express.json());
app.use(urlencoded({ extended: true }));

// app.use(express.static())

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
});