const mongoose = require('mongoose');
require('dotenv').config();
const connectDb = () => {
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    mongoose.connect(process.env.DB_HOST, options)
    return mongoose.connection
}

module.exports = connectDb;


