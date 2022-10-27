// Student ID: 301216704
// Name: Chung Yin Tsang
// Date: 21 Oct 2022

var express = require('express');
var router = express.Router();
let contactController = require('../controllers/contactlist.controller');

/* GET users listing. */
router.get('/list', contactController.contactList);


// Routers for update
router.get('/update/:id', contactController.displayUpdatePage);
router.post('/update/:id', contactController.processUpdatePage);


/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', contactController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', contactController.processAddPage);


// Route for Delete
router.get('/delete/:id', contactController.performDelete);


module.exports = router;