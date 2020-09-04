const express = require('express');
const app = express();
const goodsRouter = require('./routes/goods');
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('mongo')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors({
        credentials: true,
        origin: ["http://localhost:8000"],
        optionsSuccessStatus: 200
    })
);
app.use((req,res,next)=>{
    db().then(()=>app.listen('8000',()=>{
        console.log('server and mongod is ON')}))
})
app.use(express.json());

app.use('/', goodsRouter);



