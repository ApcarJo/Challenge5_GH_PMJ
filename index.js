const express = require('express');
const app = express();
const port = 3000;
const router = require('./router');
const db = require('./db.js');

// Middleware
app.use(router);
app.use(express.json());


//Connecting to the database
db.then(()=>{
    //Starting server
        app.listen(port, ()=> console.log(`Node server running on http://localhost:${port}`));
    })
    .catch((err)=> console.log(err.message));   