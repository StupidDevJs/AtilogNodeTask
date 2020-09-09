const mongoose = require('mongoose');
require('dotenv').config();

const dbHost = process.env.DB_HOST;
const connectDb = () => {
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false 
    }
    mongoose.connect(dbHost, options)
    return mongoose.connection
}
module.exports = connectDb;


