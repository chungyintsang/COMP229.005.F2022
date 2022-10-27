const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/users.model');

module.exports = function() {
    console.log('===> LocalStrategy Function');
    passport.use(new LocalStrategy(authLocal));
};

function authLocal (username, password, done){

    //Find username
    User.findOne({username: username}, (err, user)=>{
        console.log('===> authLocal function');

        //if error
        if (err) {
            return done(err);
        }

        //if no user
        if(!user) {
            return done(null, false, {
                message: 'Unknown user'
            });
        }

        //if password not correct
        if (!user.authenticate(password)) {
            return done(null, false, {
                message: 'Invalid password'
            });
        }

        return done(null, user);
    });
}