const router = require('express').Router();
//const Martian = require('../../models/Martian');

router.get('/', (req, res) => {
    console.log("hello");
    res.json("hello world!");
})

module.exports = router;