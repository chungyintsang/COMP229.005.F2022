// create a reference to the model
let InventoryModel = require('../models/inventory');

function getErrorMessage(err) {    
    if (err.errors) {
        for (let errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } 
    if (err.message) {
        return err.message;
    } else {
        return 'Unknown server error';
    }
};


module.exports.inventoryList = function(req, res, next) {  
    InventoryModel.find((err, inventoryList) => {
        //console.log(inventoryList);
        if(err)
        {
            console.error(err);
            res.status(400).json({
                success: false,
                message: getErrorMessage(err)
            });
        }
        else
        {    
            res.status(200).json(inventoryList);
        }
    });
}

//Backend: No dispplay page

module.exports.processEdit = (req, res, next) => {

    let id = req.params.id

    let updatedItem = InventoryModel({
        _id: id,
        item: req.body.item,
        qty: req.body.qty,
        status: req.body.status,
        size : {
            h: req.body.size_h,
            w: req.body.size_w,
            uom: req.body.size_uom,
        },
        tags: req.body.tags.split(",").map(word => word.trim())
    });

    InventoryModel.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            res.status(400).json({
                success: false,
                message: getErrorMessage(err)
            });
        }
        else
        {
            res.status(200).json({
                success: true,
                message: "Item updated sucessfully."
            });
        }
    });

}


module.exports.performDelete = (req, res, next) => {

    let id = req.params.id;


    InventoryModel.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.status(400).json({
                success: false,
                message: getErrorMessage(err)
            });
        }
        else
        {
            res.status(200).json({
                success: true,
                message: "Item removed sucessfully."
            });
        }
    });

}


// Backend: No display add page

module.exports.processAdd = (req, res, next) => {

    let newItem = InventoryModel({
        _id: req.body.id,
        item: req.body.item,
        qty: req.body.qty,
        status: req.body.status,
        size : {
            h: req.body.size.h,
            w: req.body.size.w,
            uom: req.body.size.uom,
        },
        tags: req.body.tags.split(",").map(word => word.trim())
    });

    InventoryModel.create(newItem, (err, item) =>{
        if(err)
        {
            console.log(err);
            res.status(400).json({
                success: false,
                message: getErrorMessage(err)
            });
        }
        else
        {
            // refresh the book list
            console.log(item);
            // Backend: no rediret
            res.status(200).json(item);
        }
    });
    
}