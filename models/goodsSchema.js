const mongoose = require('mongoose');
const goodsSchema = new mongoose.Schema({
    name: {type: String,required: true },
    price: {type: Number,required:true},
    isAvailable: {type: Boolean,required: true,},
});
module.exports = mongoose.model('Product', goodsSchema);