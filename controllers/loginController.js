const costumerController = require('./costumerController');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = "Competencia de Netflix";

class LoginController {

    async validate(nameCheck,passwordCheck){
        
        let costumer = await costumerController.nameCostumer(nameCheck);
        let password = costumer.password;

        let verify = await bcrypt.compare(passwordCheck, password);

        if(!verify){
            throw new Error('Wrong user or password');
        }

        let payload = {
            costumerId : costumer.id,
            createdAt: new Date,
            isAdmin: costumer.admin,
        };

        return jwt.sign(payload, secret);
    }

}

const loginController = new LoginController();
module.exports = loginController;