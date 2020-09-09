const mongoose = require('mongoose');
const goodsSchema = new mongoose.Schema({
    name: {type: String,required: true },
    price: {type: String,required:true},
    isAvailable: {type: String,required: true,},
});
module.exports = mongoose.model('Product', goodsSchema);