// Student ID: 301216704
// Name: Chung Yin Tsang
// Date: 7 Oct 2022
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/julio', function(req, res, next) {
  res.render(
    'users', 
    { 
      title: 'Julio',
      name: 'Julio' 
    });
});

router.get('/john', function(req, res, next) {
  res.render(
    'users', 
    { 
      title: 'John Smith',
      name: 'John Smith' 
    });
});

router.get('/Julio', function(req, res, next) {
  res.send('Welcome Julio!');
});

module.exports = router;
