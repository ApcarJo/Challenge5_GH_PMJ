const { Rent } = require('../models');


class Order{

    // Métodos controladores
    async newOrder(body){
        console.log(body);
        return Rent.create(body);
    }


    async deleteOrder(id){

        return Rent.destroy({where: {id: id}});

    }
}

let orderController = new Order();
module.exports = orderController;