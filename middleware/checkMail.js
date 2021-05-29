const router = require("express").Router();
const customerController = require ('../controllers/customerController.js');

class MailController{
    async checkMail(req, res, next){

        let check = await customerController.mailCustomer(req);

        console.log(check, "     <<<<============== AQUI ESTA EL DATO QUE BUSCAS!!!!!");
        try {
            if (check == true){
                throw new Error ("El correo electrónico introducido ya existe.");            
            }
            return next();

        } catch(error) {
            res.status(500).json({
                message: error.message
            });
        }

    }
}

const mailController = new MailController();
module.exports = mailController;