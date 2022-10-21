// Student ID: 301216704
// Name: Chung Yin Tsang
// Date: 21 Oct 2022
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { 
    title: 'Home'
  });
});

router.get('/projects', function(req, res, next) {
  res.render(
    'projects', 
    { 
      title: 'Projects' 
    });
});

router.get('/services', function(req, res, next) {
  res.render(
    'services', 
    { 
      title: 'Services'
    }
  );
});

router.get('/about', function(req, res, next) {
  res.render(
    'about', 
    { 
      title: 'About Me'
    });
});


router.get('/contact', function(req, res, next) {
  res.render(
    'contact', 
    { 
      title: 'Contact',
    });
});


module.exports = router;
