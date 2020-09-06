require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const connectDb = require('./mongo')
const goodsRouter = require('./routes/goods');
const serverPort = process.env.SERVER_PORT;
const serverUrl = process.env.SERVER_URL;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
        credentials: true,
        origin: [`http://${serverUrl}:${serverPort}`],
        optionsSuccessStatus: 200
    }));
app.use(goodsRouter);
const startServer = () => {
    app.listen(serverPort)
    console.log(`App started on port ${serverPort} + mongod`)};
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    });
});
connectDb()
    .on('error', () => console.log('err'))
    .on('disconnected',connectDb)
    .once('open',startServer);
