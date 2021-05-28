const router = require('express').Router();
const loginController = require('../controllers/loginController');
const customerController = require('../controllers/customerController');


router.post('/', async (req, res)=> {
    try {

        const nombreCheck = req.body.name;
        const passwordCheck= req.body.password;
        let token = await loginController.validate(nombreCheck,passwordCheck);
        let customer = await customerController.nameCustomer(nombreCheck);
        res.status(200).json({token, customer});
        
    }catch (err) {
        return res.status(500).json({
            message: err.message
        }); 
    } 
})

module.exports = router;