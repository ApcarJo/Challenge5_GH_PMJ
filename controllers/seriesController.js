const axios = require("axios");

class Serie{

    // Métodos controladores
    async searchById(id){
        let res = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`);
        return res.data;
     }
     
     async findOnTheAir7(){
         let res = await axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1`)
         return res.data;
     }

     async searchByTvTitle(tvTitle){
         let res = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=210d6a5dd3f16419ce349c9f1b200d6d&query=${tvTitle}`);
         return res.data;
     }

     async screenedTheater(id){
         let res = await axios.get(`https://api.themoviedb.org/3/tv/${id}/screened_theatrically?api_key=210d6a5dd3f16419ce349c9f1b200d6d`);
         return res.data;
     }

     async topRated(){
        let res = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1`);
        return res.data;
    }
}

let seriesController = new Serie();
module.exports = seriesController;