const router = require("express").Router();
// const { Order } = require('./models');
const { Customer } = require('./models');

class Searchcity{
    async findCity(ordersFind) {

        let orderInfo;
        let arrayCity = [];
        for (let i in ordersFind){
        orderInfo = await Customer.findByPk(ordersFind[i].dataValues.customerId);
        
        arrayCity.push(orderInfo.name, orderInfo.city, ordersFind[i].id);
        }
        return arrayCity;
    }

    // Esta función podría simplemente llamar a la función anterior y filtrar por ciudad.
    async findByCity(ordersFind, city){
        let orderInfo;
        let arrayCity = [];
        for (let i in ordersFind){
        orderInfo = await Customer.findByPk(ordersFind[i].dataValues.customerId);
        
        if (orderInfo.city == city){
            // arrayCity.push(orderInfo.name, orderInfo.city, ordersFind[i].id); //Solo muestra la ID del order y no la información del order completa.
            arrayCity.push(orderInfo.name, orderInfo.city, ordersFind[i]); // Muestra todo el order
            }
        }
        return arrayCity;

    }
}

let util = new Searchcity();
module.exports = util;