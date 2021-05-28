const customerController = require('./customerController');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = "Competencia de Netflix";


class LoginController {

    async validate(nameCheck,passwordCheck){
        
        let customer = await customerController.nameCustomer(nameCheck);
        let password = customer.password;

        let verify = await bcrypt.compare(passwordCheck, password);

        if(!verify){
            throw new Error('Wrong user or password');
        }

        let payload = {
            customerId : customer.id,
            createdAt: new Date,
            isAdmin: customer.admin,
        };

        return jwt.sign(payload, secret);
    }

}

const loginController = new LoginController();
module.exports = loginController;