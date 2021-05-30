const { Order } = require('../models');
// const { Customer } = require('../models');
const Util = require('../util');


class Rent{

    // Métodos controladores
    async newOrder(body){
        return Order.create(body);
    }

    async allOrders(){

        return Order.findAll();

    }

    async orderId(body){

        return Order.findByPk(body.id);

    }

    async allCities(){

        let ordersFind = await Order.findAll();
        return Util.findCity(ordersFind);
    }

    async byCity(city){
        console.log(city, "esta es la citie que estás buscando");
        let ordersFind = await Order.findAll();
        return Util.findByCity(ordersFind, city);
    }


    async deleteOrder(id){
        return Order.destroy({
            where: {id}
        })
    }
}

let orderController = new Rent();
module.exports = orderController;