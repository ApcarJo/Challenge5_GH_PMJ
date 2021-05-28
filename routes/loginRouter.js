const router = require('express').Router();
const loginController = require('../controllers/loginController');

router.post('/', async (req, res)=> {
    try {

        const nombreCheck = req.body.nombre;
        const passwordCheck= req.body.password;
        let token = await loginController.validate(nombreCheck,passwordCheck);
        let pasajero = await pasajeroController.namePassenger(nombreCheck);
        res.status(200).json({token, pasajero});
        
    }catch (err) {
        return res.status(500).json({
            message: err.message
        }); 
    } 
})

module.exports = router;