// Student ID: 301216704
// Name: Chung Yin Tsang
// Date: 7 Oct 2022
var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index.controller')

/* GET home page. */
router.get('/', indexController.home);

router.get('/projects', indexController.projects);

router.get('/services', indexController.services);

router.get('/about', indexController.about);



router.get('/contact', indexController.contact);


module.exports = router;
