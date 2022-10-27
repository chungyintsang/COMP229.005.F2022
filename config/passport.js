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
            done(err, user);
        });
    });

    require('./local')();
};