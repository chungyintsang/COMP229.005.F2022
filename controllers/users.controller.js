// Student ID: 301216704
// Name: Chung Yin Tsang
// Date: 21 Oct 2022


let Users = require('../models/users.model');
const { use } = require('../routes');

var loginStatus = false;


//Function for sign up
module.exports.displaySignup = (req, res, next) => {
    let users = Users();

    res.render('users/signup', {
        title: 'Sign Up',
        subTitle: 'Create an Account',
        contact: users
    })   
}

module.exports.processSignup = (req, res, next) => {
    let newUser = Users({
        _id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        age: req.body.age,
        gender: req.body.gender
    });

    Users.create(newUser, (err, contact) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/users/login');
        }
    });
}

//Function for login
module.exports.displayLogin = (req, res, next) => {
    res.render('users/login', {
        title: 'Login',
        subTitle: 'Enter your Login Details',
        loginFailed: ''
    })  
}

module.exports.processLogin = (req, res, next) => {
    let usernameInput = req.body.username;
    let passwordInput = req.body.password;

    
    Users.find((err, users) => {
        if(err){
            return console.error(err);
        }
        else{
            //Matching username and password
           for (let i = 0; i < users.length; i++){
                if (users[i].username == usernameInput){

                    //Match username
                    console.log("Username matched: " + users[i].username);

                    //Match password
                    if (users[i].password == passwordInput){
                        loginStatus = true;
                        console.log("Password matched: " + users[i].password);
    

                    }else{
                        console.log("Password not match"); 
                    }
                }else{
                    console.log("Username not match");
                }
            }

            
            if (loginStatus){
                //Login success
                res.redirect('/users/list');
            }else{
                // Display login failed message
                res.render('users/login', {
                    title: 'Login',
                    subTitle: 'Enter your Login Details',
                    loginFailed: 'Login Failed! Your username or password is not correct.'
                })  
            }
        }
    });
    
}