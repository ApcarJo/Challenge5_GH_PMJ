const router = require("express").Router();
const orderController = require("../controllers/orderController.js");
const authenticate = require('../middleware/authenticate.js');
const admin = require ('../middleware/admin.js');

// CRUD


//GET - ID ORDER - NO ADMIN




//GET - ALL ORDERS - ADMIN



// PUSH - CREATE A NEW ORDER
router.post("/", authenticate, async (req,res) =>{
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
router.delete('/', admin, async (req, res) => {
    try {
        const body = req.body.id;
        res.json(await orderController.deleteOrder(body));

    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

module.exports = router;