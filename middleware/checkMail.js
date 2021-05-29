const router = require("express").Router();
const customerController = require ('../controllers/customerController.js');

const checkMail = async (req, res, next) => {

    const exists = await customerController.mailCustomer(req.body.mail);

    try {
        if (exists != null){
            throw new Error ("El correo electrónico introducido ya existe.");            
            }
            return next();

        } catch(error) {
            res.status(500).json({
                message: error.message
        });
    }
}

module.exports = checkMail;