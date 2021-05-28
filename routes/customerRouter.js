const router = require("express").Router();
const customerController = require("../controllers/customerController.js");
const authenticate = require('../middleware/authenticate');
const admin = require('../middleware/admin');


//CRUD CUSTOMER

router.get('/', admin, async (req, res) => {
    try {
        res.json(await customerController.allCustomer());
    }catch (err) {
        return res.status(500).json({
        message: err.message
        });
    }
});

router.post('/customer/', authenticate, async (req, res)=> {             //id/:id
    try {
        let id = req.body.customerId;
        console.log(id);
        res.json(await customerController.customerId(id));
        
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});

router.get('/:name', authenticate, async (req, res)=> {          
    try {
        let name = req.params.name;
        res.json(await customerController.nameCustomer(name));
        
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});

router.post('/', async (req, res)=> {
    try {
        const body = req.body;
        res.json(await customerController.newCustomer(body));
        
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});

router.put('/', async (req, res)=> {
    try {
        const attributes = req.body;
        res.json(await customerController.modifyCustomer(attributes));
        
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});

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