const router = require('express').Router();
const martianRoutes = require('./martianRoutes');

router.use('/martians', martianRoutes);

module.exports = router;