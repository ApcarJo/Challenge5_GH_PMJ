const router = require("express").Router();
const customerController = require("../controllers/customerController.js");
const authenticate = require('../middleware/authenticate.js');
const admin = require('../middleware/admin.js');
const checkMail = require('../middleware/checkMail.js');


//CRUD CUSTOMER
//Get All customers.
router.get('/', admin, async (req, res) => {
    try {
        res.json(await customerController.allCustomer());
    }catch (err) {
        return res.status(500).json({
        message: err.message
        });
    }
});

//Find customer by ID
router.post('/id', authenticate, async (req, res)=> {             
    try {
        let id = req.body.customerId;
        res.json(await customerController.customerId(id));
        
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});

//Find customer by name
router.post('/name', authenticate, async (req, res)=> {          
    try {
        let name = req.body.name;
        res.json(await customerController.nameCustomer(name));
        
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});

//Add a new Customer
router.post('/', checkMail, async (req, res)=> {
    try {
        const body = req.body;
        res.json(await customerController.newCustomer(body));
        
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});


//Modify a customer
router.put('/', authenticate, async (req, res)=> {
    try {
        const attributes = req.body;
        res.json(await customerController.modifyCustomer(attributes));
        
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});


//Delete a customer
router.delete('/', admin, async (req, res) =>{
    try {
        const id = req.body.id;
        res.json(await customerController.deleteCustomer(id));
        
    }catch (err) {
        return res.status(500).json({
            message: err.message
        }); 
    }
});

module.exports = router;