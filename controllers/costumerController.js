const { Costumer } = require('../models'); //No necesita indicarle el archivo, solo la carpeta, ya que lo desestructura desde index.js
const bcrypt = require('bcrypt');

class Client {

    async allCostumers(){

        return Costumer.findAll();

    }

    async nameCostumer(name){
        return Costumer.findOne({
            where: {name}
        })
    }

    async costumerId(id){

        return Costumer.findByPk(id);

    }

    async newCostumer(body){

        let password = body.password;
        let passwordHashed = bcrypt.hashSync(password, 10);
        body.password = passwordHashed;
        return Costumer.create(body);
    }


    async deleteCostumer(id){
        return Costumer.destroy({where: {id: id}});
    }

    async modifyCostumer(attributes){
        return Costumer.update(
            //Datos que cambiamos
            {edad: attributes.edad, especialidad: attributes.especialidad},
            //Donde..
            {where: {id: attributes.id}}
        )
    }
}

let costumerController = new Client();
module.exports = costumerController;