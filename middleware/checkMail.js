const router = require("express").Router();
const customerController = require ('../controllers/customerController.js');

const checkMail = async (req, res, next) => {

    const existsMail = await customerController.mailCustomer(req.body.mail);

    try {
        if (existsMail != null){
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