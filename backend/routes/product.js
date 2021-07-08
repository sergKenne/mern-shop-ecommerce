const express = require('express');
const route = express.Router()

const products = require('../controllers/productsController')

//create  new product
route.post("/product/new", products.createProduct);

//get all product
route.get("/products", products.getAllProducts )

module.exports = route;