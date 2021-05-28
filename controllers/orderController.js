const { Order } = require('../models');


class Rent{

    // Métodos controladores
    async newOrder(body){
        console.log("newOrder", body);
        return Order.create(body);
    }


    async deleteOrder(id){
        return Order.destroy({
            where: {id}
        })
    }
}

let orderController = new Rent();
module.exports = orderController;