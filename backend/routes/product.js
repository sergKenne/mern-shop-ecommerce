const express = require('express');
const route = express.Router()

const allProducts = require('../controllers/productsController')

route.get("/products", allProducts.getProducts )

module.exports = route;