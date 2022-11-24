let mongoose = require('mongoose');

// Create a model class
let inventoryModel = mongoose.Schema(
    {
        item: String,
        qty: Number,
        tags: [],
        status: String,
        size: {
            h: Number,
            w: Number,
            uom: String
        },
        //Adds relationship with User
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            //The name of the module name (in user.js)
            ref: "User"
        }
    },
    {
        collection: "inventory"
    }
);

module.exports = mongoose.model('Inventory', inventoryModel);