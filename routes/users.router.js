// Student ID: 301216704
// Name: Chung Yin Tsang
// Date: 21 Oct 2022

var express = require('express');
var router = express.Router();
let usersController = require('../controllers/users.controller');

//Route for Sign Up
router.get('/signup', usersController.displaySignup);
router.post('/signup', usersController.processSignup);  

//Route for Login
router.get('/login', usersController.displayLogin); 
router.post('/login', usersController.processLogin); 

//Logout
router.get('/logout', usersController.logout);

module.exports = router;