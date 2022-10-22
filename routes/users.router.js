// Student ID: 301216704
// Name: Chung Yin Tsang
// Date: 21 Oct 2022

var express = require('express');
var router = express.Router();
let usersController = require('../controllers/users.controller');

/* GET users listing. */
router.get('/list', usersController.contactList);


// Routers for update
router.get('/update/:id', usersController.displayUpdatePage);
router.post('/update/:id', usersController.processUpdatePage);


/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', usersController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', usersController.processAddPage);


// Route for Delete
router.get('/delete/:id', usersController.performDelete);

//Route for Sign Up
router.get('/signup', usersController.displaySignup);
router.post('/signup', usersController.processSignup);  

//Route for Login
router.get('/login', usersController.displayLogin); 
router.post('/login', usersController.processLogin); 

module.exports = router;