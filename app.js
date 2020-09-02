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
    () => console.log('ZALUPA')
);

app.use(express.json());

app.use('/', goodsRouter);

app.listen(3000, () => console.log('server started'));




// mongoose.connect("mongodb://localhost:27017/users", {useNewUrlParser: true,useUnifiedTopology: true }).then(()=>{
//     app.listen(port, async()=>{
//         const ex = await Man.find({}).then(res=>console.log('res', res))
//         console.log(`server is rnnging`)
//     })
// })

// app.get('/:onemore',(req,res,next)=> { // Controller
//     res.send('Get with USE');
// });




 
// создаем объект MongoClient и передаем ему строку подключения




