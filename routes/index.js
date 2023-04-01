const express = require('express');
// use express router for setting up routes
const router = express.Router();
// import controllers 
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home)

module.exports = router;
