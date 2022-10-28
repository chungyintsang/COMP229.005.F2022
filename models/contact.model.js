// Student ID: 301216704
// Name: Chung Yin Tsang
// Date: 21 Oct 2022

let mongoose = require('mongoose');

//Create a model class
let usersModel = mongoose.Schema(
    {
        contactName: String,
        contactNumber: String,
        email: String
    },
    {
        collection: "contact"
    }
);


module.exports = mongoose.model('Contact', usersModel);