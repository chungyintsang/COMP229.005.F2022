// Student ID: 301216704
// Name: Chung Yin Tsang
// Date: 21 Oct 2022


let Users = require('../models/users.model');
let Contact = require('../models/contact.model');
const { use } = require('../routes');

var loginStatus = false;

//Function for contact list
exports.contactList = function(req, res, next){
    if (loginStatus){
        Contact.find((err, contactList)=>{
            if(err){
                return console.error(err);
            }
            else{
                res.render('users/list', {
                    title: 'Business Contact List',
                    ContactList: contactList
                })
            }
        });
    }else{
        res.redirect('/users/login');
    }

}

// Function for update
module.exports.displayUpdatePage = (req, res, next) => {
    let id = req.params.id;
    if (loginStatus){
        Contact.findById(id, (err, contactToUpdate) => {
            if(err)
            {
                console.log(err);
                res.end(err);
            }
            else
            {
                //show the edit view
                res.render('users/add_update', {
                    title: 'Update Contact', 
                    subTitle: 'Update the Contact',
                    contact: contactToUpdate
                })
            }
        });
    }else{
        res.redirect('/users/login');
    }

}


module.exports.processUpdatePage = (req, res, next) => {
    let id = req.params.id

    let updatedItem = Contact({
        _id: req.body.id,
        contactName: req.body.contactName,
        contactNumber: req.body.contactNumber,
        email: req.body.email
    });

    Contact.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/users/list');
        }
    });
}

//Function for add
module.exports.displayAddPage = (req, res, next) => {
    let newContact = Contact();

    if (loginStatus){
        res.render('users/add_update', {
            title: 'Add Contact',
            subTitle: 'Add a new Contact',
            contact: newContact
        }) 
    }else{
        res.redirect('/users/login');
    }

         
}

module.exports.processAddPage = (req, res, next) => {
    let newContact = Contact({
        contactName: req.body.contactName,
        contactNumber: req.body.contactNumber,
        email: req.body.email
    });

    Contact.create(newContact, (err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/users/list');
        }
    });

}


//Function for delete
module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Contact.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/users/list');
        }
    });
}

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
                    console.log("Password not match");
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