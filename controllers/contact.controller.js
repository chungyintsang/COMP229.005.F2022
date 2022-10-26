// Student ID: 301216704
// Name: Chung Yin Tsang
// Date: 21 Oct 2022


let Contact = require('../models/contact.model');
let Users = require('./users.controller');
const { use } = require('../routes');


//Function for contact list
exports.contactList = function(req, res, next){
    if (Users.loginStatus){
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

