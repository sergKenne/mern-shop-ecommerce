require('dotenv').config();
const express = require('express');
const app = express();

const routeProduct = require('./router/product.js')

app.use('/api/v1', routeProduct);

const PORT = process.env.PORT || 5000;
const NODE_MODE = process.env.NODE_MODE;

app.listen( PORT, ()=>{
    console.log(`server run on port ${PORT} in mode ${NODE_MODE}`);
})
