const Product = require('../models/product')




//create new product
const createProduct = async(req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({
            success: true,
            product
        })
    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
    
}



const getAllProducts = async(req, res) => {
    try {

        const products = await Product.find({});

        res.status(200).json(products);
        console.log({
            succes: true,
            message: 'get all products in request ....',
        });

    } catch(err) {
        console.log(err);
    }
    
};

module.exports = {
    getAllProducts,
    createProduct
};