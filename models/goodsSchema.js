const mongoose = require('mongoose');
const goodsSchema = new mongoose.Schema({
    name: {type: String,required: true, unique: true},
    price: {type: String,required:true},
    isAvailable: {type: String,required: true,},
    description: {type: String,required: true,}
    
});
module.exports = mongoose.model('Product', goodsSchema);