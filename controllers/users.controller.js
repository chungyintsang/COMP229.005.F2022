// Student ID: 301216704
// Name: Chung Yin Tsang
// Date: 21 Oct 2022


let Users = require('../models/users.model');
let passport = require('passport');

// creates error messages
function getErrorMessage(err) {
    console.log("===> Erro: " + err);
    let message = '';
  
    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = 'Username already exists';
                break;
            default:
                message = 'Something went wrong';
        }
    } else {
        for (var errName in err.errors) {
            if (err.errors[errName].message) message = err.errors[errName].message;
        }
    }
  
    return message;
  };


//Function for sign up
module.exports.displaySignup = (req, res, next) => {
    //Check if the request from passport has user
    if (!req.users){
        //Create an empty new users object
        let user = Users();

        res.render('users/signup', {
            title: 'Sign Up',
            subTitle: 'Create an Account',
            //flash will boot the error message
            messages: req.flash('error'),
            user: user,
            userName: req.user ? req.user.username : ''
        });   
    }else{
        //If a user has already login, redirect to home
        return res.redirect('/');
    }

}

module.exports.processSignup = (req, res, next) => {
    console.log('=======>process Signup function');
    if (!req.user && req.body.password === req.body.passwordConfirm) {
        console.log(req.body);
    
        //mongoose match the body with database automatically
        let user = new Users(req.body);
        user.provider = 'local';
        console.log(user);
    
        user.save((err) => {
            if (err) {
                let message = getErrorMessage(err);

                req.flash('error', message);
                // return res.redirect('/users/signup');
                return res.render('users/signup', {
                    title: 'Sign Up',
                    subTitle: 'Create an Account',
                    messages: req.flash('error'),
                    user: user,
                    userName: req.user ? req.user.username : ''
                });
            }
            // Call login method from passport
            req.login(user, (err) => {
                if (err) { 
                    return next(err);
                }
                return res.redirect('/');
            });
        });
    } else {
        return res.redirect('/');
    }
}

//Function for login
module.exports.displayLogin = (req, res, next) => {
    if (!req.user) {
        res.render('users/login', {
          title: 'Login',
          subTitle: 'Enter Login Details',
          messages: req.flash('error') || req.flash('info'),
          userName: req.user ? req.user.username : ''
        });
    } else {
        console.log(req.user);
        return res.redirect('/');
    }
}

module.exports.processLogin = (req, res, next) => {
    passport.authenticate('local', {   
        successRedirect: req.session.url || '/',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next);
    delete req.session.url;
}

//Function for logout
module.exports.logout = function(req, res, next) {
    req.logout(function(err) {
      if (err) { 
        return next(err); 
      }
      res.redirect('/');
    });
  };