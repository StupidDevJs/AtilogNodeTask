const express = require('express');
const app = express();
const mongoose = require('mongoose');
const goodsRouter = require('./routes/goods');
const bodyParser = require('body-parser')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
    "mongodb://localhost:27017/goods",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected to mongod')
);

app.use(express.json());

app.use('/', goodsRouter);

app.listen(8000, () => console.log('server started'));

