// Student ID: 301216704
// Name: Chung Yin Tsang
// Date: 7 Oct 2022
let express = require('express');
let router = express.Router();
let usersController = require('../controllers/user');
let authController = require('../controllers/auth');

/* GET users listing. */
// router.get('/', function(req, res, next) {  
//   res.render('users', { 
//     title: 'Users',
//     userName: req.user ? req.user.username : ''
//   });
// });

router.get('/me', authController.requireAuth, usersController.myprofile);

router.post('/signup', usersController.signup);


router.post('/signin', usersController.signin);



module.exports = router;