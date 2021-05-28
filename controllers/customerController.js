const { Customer } = require('../models'); //No necesita indicarle el archivo, solo la carpeta, ya que lo desestructura desde index.js
const bcrypt = require('bcrypt');

class Client {

    async allCustomer(){

        return Customer.findAll();

    }

    async nameCustomer(name){
        return Customer.findOne({
            where: {name}
        })
    }

    async customerId(id){

        return Customer.findByPk(id);

    }

    async newCustomer(body){

        let password = body.password;
        let passwordHashed = bcrypt.hashSync(password, 10);
        body.password = passwordHashed;
        return Customer.create(body);
    }


    async deleteCustomer(id){
        return Customer.destroy({where: {id: id}});
    }

    //Hay que cambiar los datos que cambiamos

    // async modifyCustomer(attributes){
    //     return Customer.update(
    //         //Datos que cambiamos
    //         {edad: attributes.edad, especialidad: attributes.especialidad},
    //         //Donde..
    //         {where: {id: attributes.id}}
    //     )
    // }
}

let customerController = new Client();
module.exports = customerController;