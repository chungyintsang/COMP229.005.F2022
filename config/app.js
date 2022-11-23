//Backend: not require 'cookie-parser' 'express-session' 'connect-flash'
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
let compress = require('compression');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let passport = require('passport');

var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');
var inventoryRouter = require('../routes/inventory');

var app = express();

// Backend: no session required


// Backend: no view engine setup


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Backend: No cookieParser

//Backend: no static path


// Sets up passport
// Backend: No flash required, no passport.session
app.use(passport.initialize());


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/inventory', inventoryRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404, "Endpoint not found."));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // Backend: cannot render the error page in views
  // res.render('error');
  res.json(
    {
      success: false,
      message: err.message
    });
});

module.exports = app;