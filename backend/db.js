require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => console.log("db connected succesful"))
    .catch(err => console.log(err));

}

module.exports = connectDB;