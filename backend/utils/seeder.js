const Product = require('../models/product');
const connectDB = require('../db');
require('dotenv').config();

const products = require('../data/products.json');

connectDB();

const insertAllProducts = async() => {
    try {
        await Product.deleteMany();
        await Product.insertMany(products);
        console.log('products add successful');
    } catch (err) {
        console.log(err);
    }
    
}

insertAllProducts ();



