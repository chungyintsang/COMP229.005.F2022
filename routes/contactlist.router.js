// Student ID: 301216704
// Name: Chung Yin Tsang
// Date: 21 Oct 2022

var express = require('express');
var router = express.Router();
let contactController = require('../controllers/contactlist.controller');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/users/login');
    }
    next();
}

/* GET users listing. */
router.get('/list', requireAuth, contactController.contactList);


// Routers for update
router.get('/update/:id', requireAuth, contactController.displayUpdatePage);
router.post('/update/:id', requireAuth, contactController.processUpdatePage);


/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, contactController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, contactController.processAddPage);


// Route for Delete
router.get('/delete/:id', requireAuth, contactController.performDelete);


module.exports = router;