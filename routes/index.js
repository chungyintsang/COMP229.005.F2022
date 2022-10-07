var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' , name: 'Julio'});
});

router.get('/projects', function(req, res, next) {
  res.render(
    'index', 
    { 
      title: 'Projects',
      name: 'Julio' 
    });
});

router.get('/about', function(req, res, next) {
  res.render(
    'index', 
    { 
      title: 'About Me',
      name: 'Julio' 
    });
});



router.get('/contact', function(req, res, next) {
  res.render(
    'index', 
    { 
      title: 'Contact',
      name: 'Julio' 
    });
});


module.exports = router;
