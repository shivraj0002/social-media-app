const express = require('express');
// use express router for setting up routes
const router = express.Router();
// import controllers 
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home)
router.use('/users', require('./users'))
// for any further routes, access from here
// router.use('/routName', require('./routerFilename'))

module.exports = router;
