require('dotenv').config();
const express = require('express');
const app = express();

const dbConnection = require('./db');

dbConnection();

const routeProduct = require('./routes/product.js')
app.use(express.json());

app.use('/api/v1', routeProduct);


const PORT = process.env.PORT || 5000;
const NODE_MODE = process.env.NODE_MODE;

app.listen( PORT, ()=>{
    console.log(`server run on port ${PORT} in mode ${NODE_MODE} ...`);
})
