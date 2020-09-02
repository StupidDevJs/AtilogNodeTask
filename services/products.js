const Product = require('../models/goodsSchema');

const getAll = () => Product.find({});

module.exports = {
    getAll
}