const router = require("express").Router();
const orderController = require("../controllers/orderController.js");
const authenticate = require('../middleware/authenticate.js');
const admin = require ('../middleware/admin.js');

// CRUD


//GET - ID ORDER - NO ADMIN
router.get('/city', admin, async (req, res) => {
    try {
        // let city = req.body.city;
        res.json(await orderController.allCities());

   }catch (err) {
       return res.status(500).json({
           message: err.message
       });
   }
});

router.post('/city', admin, async (req, res) => {
    try {
        let city = req.body.city;
        res.json(await orderController.byCity(city));

   }catch (err) {
       return res.status(500).json({
           message: err.message
       });
   }
});



//GET - ALL ORDERS - ADMIN
router.get('/', admin, async (req, res) => {
     try {
        res.json(await orderController.allOrders());

    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});


//Find order by ID
router.post('/id', authenticate, async (req, res)=> {             
    try {
        let body = req.body;
        res.json(await orderController.orderId(body));
        
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});


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

// UPDATE - MODIFY ORDER - ADMIN

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