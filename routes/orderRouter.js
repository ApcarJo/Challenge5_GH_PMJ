const router = require("express").Router();
const orderController = require("../controllers/orderController.js");

// CRUD
// PUSH - CREATE A NEW ORDER

router.post("/", async (req,res) =>{
    try{
        let id = req.params.id;
        res.json(await orderController.newOrder(req.body));
    }catch (err){
        return res.status(500).json({
            message: err.message
        });
    }
});