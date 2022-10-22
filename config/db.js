// Student ID: 301216704
// Name: Chung Yin Tsang
// Date: 21 Oct 2022

//Database link
let atlasDB = "mongodb+srv://dbuser:Ny3UVBOD3EO3oZpK@cluster005.8scysba.mongodb.net/myPage?retryWrites=true&w=majority";

let mongoose = require('mongoose');

module.exports = function(){

    //Connect to the database
    mongoose.connect(atlasDB);

    let mongodb = mongoose.connection;
    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('===== Connected to MongoDB =====')
    });

    return mongodb;
}