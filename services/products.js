const Product = require('../models/goodsSchema');

const getAllPoducts = () => Product.find({});
const getProductById = (id) => Product.findById(id);

module.exports = {
    getAllPoducts,
    getProductById
}