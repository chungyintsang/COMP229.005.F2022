var express = require('express');
var router = express.Router();

let passport = require('passport');

let inventoryController = require('../controllers/inventory');
let authController = require('../controllers/auth');

/* GET list of items */
router.get('/list', inventoryController.inventoryList);

// Routers for edit
//Backend: no diaplay edit page function
router.put('/edit/:id', authController.requireAuth, authController.isAllowed, inventoryController.processEdit);

// Delete
router.delete('/delete/:id', authController.requireAuth, authController.isAllowed, inventoryController.performDelete);


/*Backend: no Route for displaying the Add page

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', authController.requireAuth, inventoryController.processAdd);

module.exports = router;