const axios = require("axios");

class Order{

    // Métodos controladores
    async newOrder(){
        let res = await axios.get('');
        return res.data;
    }

}

let orderController = new Order();
module.exports = orderController;