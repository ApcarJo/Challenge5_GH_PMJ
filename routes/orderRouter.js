const router = require("express").Router();
const orderController = require("../controllers/orderController.js");

// CRUD


//GET - ID ORDER - NO ADMIN




//GET - ALL ORDERS - ADMIN



// PUSH - CREATE A NEW ORDER
router.post("/", authenticate, async (req,res) =>{
    try{
        let id = req.params.id;
        res.json(await orderController.newOrder(req.body));
    }catch (err){
        return res.status(500).json({
            message: err.message
        });
    }
});

//PUT - MODIFY ORDER
router.put('/', authenticate, async (req, res) => {
    try {
        const cuerpoDeDatos = req.body;
        res.json(await pasajeroController.modifyPassenger(cuerpoDeDatos));

    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});


// DELETE - DELETE ORDER
router.delete('/:id', admin,  async (req, res) => {
    try {
        const id = req.params.id;
        res.json(await pasajeroController.deleteOrder(id));

    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});