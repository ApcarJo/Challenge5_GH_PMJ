const router = require("express").Router();
const costumerController = require("../controllers/moviesController.js");

//CRUD COSTUMER

router.get('/', admin, async (req, res) => {
    try {
        res.json(await costumerController.findAll());
    }catch (err) {
        return res.status(500).json({
        message: err.message
        });
    }
});

router.get('/costumer/:id', authenticate, async (req, res)=> {             //id/:id
    try {
        let id = req.params.id;
        res.json(await costumerController.searchById(id));
        
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});

router.get('/:name', authenticate, async (req, res)=> {          
    try {
        let name = req.params.name;
        res.json(await costumerController.nameCostumer(name));
        
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});

router.post('/', async (req, res)=> {
    try {
        const body = req.body;
        res.json(await costumerController.newCostumer(body));
        
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});

router.put('/', async (req, res)=> {
    try {
        const attributes = req.body;
        res.json(await costumerController.modifyCostumer(attributes));
        
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});

router.delete('/:id', admin, async (req, res) =>{
    try {
        const id = req.params.id;
        res.json(await pasajeroController.deleteCostumer(id));
        
    }catch (err) {
        return res.status(500).json({
            message: err.message
        }); 
    }
});