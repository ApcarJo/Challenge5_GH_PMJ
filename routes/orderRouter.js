const router = require("express").Router();
const orderController = require("../controllers/orderController.js");

// CRUD


//GET - ID ORDER - NO ADMIN




//GET - ALL ORDERS - ADMIN



// PUSH - CREATE A NEW ORDER
router.post("/", async (req,res) =>{
    try{
        let body = req.body;
        console.log(body);
        res.json(await orderController.newOrder(body));
    }catch (err){
        return res.status(500).json({
            message: err.message
        });
    }
});




// DELETE - DELETE ORDER
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        res.json(await orderController.deleteOrder(id));

    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

module.exports = router;