// Student ID: 301216704
// Name: Chung Yin Tsang
// Date: 21 Oct 2022

let mongoose = require('mongoose');

//Create a model class
let usersModel = mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        email: String,
        username: String,
        password: String,
        age: Number,
        gender: String
    },
    {
        collection: "users"
    }
);

module.exports = mongoose.model('Users', usersModel);