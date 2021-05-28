const router = require("express").Router();
const customerController = require("../controllers/customerController.js");

//CRUD CUSTOMER

router.get('/', admin, async (req, res) => {
    try {
        res.json(await customerController.findAll());
    }catch (err) {
        return res.status(500).json({
        message: err.message
        });
    }
});

router.get('/customer/:id', authenticate, async (req, res)=> {             //id/:id
    try {
        let id = req.params.id;
        res.json(await customerController.searchById(id));
        
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

router.delete('/:id', admin, async (req, res) =>{
    try {
        const id = req.params.id;
        res.json(await pasajeroController.deleteCustomer(id));
        
    }catch (err) {
        return res.status(500).json({
            message: err.message
        }); 
    }
});

module.exports = router;