const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const connectDb = require('./mongo')
const goodsRouter = require('./routes/goods');
require('dotenv').config()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
        credentials: true,
        origin: ["http://localhost:8000"],
        optionsSuccessStatus: 200
    })

);
app.use(goodsRouter);
const startServer = () => {
    app.listen(process.env.SERVER_PORT)
    console.log(`App started on port 8000 + mongod`)
};
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    });
});
connectDb()
    .on('error', () => console.log('zalupa'))
    .on('disconnected', connectDb)
    .once('open', startServer);
