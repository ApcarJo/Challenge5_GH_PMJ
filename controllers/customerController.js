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

    async mailCustomer(mail){
        return Customer.findOne({
            where: {mail}
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
        return Customer.destroy({
            where: {id}
        })
    }

    async modifyCustomer(attributes){
        return Customer.update(
            //Datos que cambiamos
            {phone: attributes.phone, address: attributes.address, city: attributes.city, postalcode: attributes.postalcode},
            //Donde..
            {where: {id: attributes.id}}
        )
    }
}

let customerController = new Client();
module.exports = customerController;