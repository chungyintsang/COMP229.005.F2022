// Student ID: 301216704
// Name: Chung Yin Tsang
// Date: 27 Oct 2022

const passport = require('passport');
const User = require('../models/users.model');

module.exports = function() {
  
    //When a user is authenticated, Passport will save its _id pproperty 
    passport.serializeUser((user, done) => {
        console.log('=====> serializeUser');
        done(null, user.id);
    });

    // When the user object is needed later, Passport will use the _id to grab the uuser object from the database
    passport.deserializeUser((id, done) => {
        // find object by id but without password and salt
        User.findOne({_id: id}, '-password -salt', (err, user) => {
            console.log('=====> deserializeUser');
            //Place an user object into the request
            done(err, user);
        });
    });

    require('./local')();
};