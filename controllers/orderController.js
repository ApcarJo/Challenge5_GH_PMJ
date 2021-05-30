const { Order } = require('../models');
const { Customer } = require('../models');


class Rent{

    // Métodos controladores
    async newOrder(body){
        console.log("newOrder", body);
        return Order.create(body);
    }

    async allOrders(){

        return Order.findAll();

    }

    async byCity(){

        let ordersFind = await Order.findAll();
        // let rarito = [];
        let orderInfo;
        let arrayCity = [];
        for (let i in ordersFind){
        // rarito.push(ordersfind[i].dataValues.customerId); //id de cada user de cada order obtenido
        orderInfo = await Customer.findByPk(ordersFind[i].dataValues.customerId);
           
        arrayCity.push(orderInfo.name, orderInfo.city, ordersFind[i].id);
        }
        return arrayCity;
    }

    

    async deleteOrder(id){
        return Order.destroy({
            where: {id}
        })
    }
}

let orderController = new Rent();
module.exports = orderController;