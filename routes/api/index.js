const router = require('express').Router();
const martianRoutes = require('./martianRoutes');

router.use('/martian', martianRoutes);

module.exports = router;