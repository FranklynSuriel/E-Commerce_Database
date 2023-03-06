// import Packages
const router = require('express').Router();
const apiRoutes = require('./api');

// Import our modular router for /api
router.use('/api', apiRoutes);

// manage wrong routes
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

// Export the module
module.exports = router;