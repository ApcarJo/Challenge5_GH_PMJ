const express = require('express');
const app = express();
const port = 3000;
const router = require('./router');
const db = require('./db.js');

// Middleware
app.use(express.json());  //Importante la prioridad a la hora de declararlo.
app.use(router);



//Connecting to the database
db.then(()=>{
    //Starting server
        app.listen(port, ()=> console.log(`Node server running on http://localhost:${port}`));
    })
    .catch((err)=> console.log(err.message));   