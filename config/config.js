require('dotenv').config(); //when it calls config(), it will look for the variable  ATLASDB, if not found, look into .env file

module.exports = {
    // "ATLASDB": "mongodb+srv://dbuser:Ny3UVBOD3EO3oZpK@cluster005.8scysba.mongodb.net/products?retryWrites=true&w=majority"
    "ATLASDB": process.env.ATLASDB,
    "LOCALDB": "mongodb://localhost:27017/dbapp",
    //API key
    "SECRETKEY": "y$B&E)H+MbQeThWmZq4t7w!z%C*F-JaNcRfUjXn2r5u8x/A?D(G+KbPeSgVkYp3s"
}