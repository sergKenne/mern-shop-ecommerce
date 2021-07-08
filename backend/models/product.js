const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please enter the name of product'],
        trim: true,
        maxLength: [100, 'the product name can not execeed 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'please enter product price'],
        maxLength: [5, 'the product price can not execeed 5 character'],
        default: 0.00
    },
    description: {
        type: String,
        required: [true, 'please enter product description']
    },
    rating: {
        type: Number,
        default: 0
    },
    image: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, 'please select category of product'],
        enum: {
            values: [
                'Electronics',
                'Cameras',
                'Laptops',
                'Accessories',
                'Headphones',
                'Food',
                'Books',
                'Clothes/Shoes',
                'Beauty/Health',
                'Sports',
                'Outdoor',
                'Home'
            ],
            message: 'Please select correct category for product'
        }
    },
    seller: {
        type: String,
        required: [true, 'Please enter product stock']
    },
    stock: {
        type: Number,
        required: [true, 'Please enter product stock'],
        maxLength: [5, 'stock product cannot exceed 5 caracters'],
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    review: [
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});


const Product = mongoose.model('Product', productSchema)
module.exports = Product;