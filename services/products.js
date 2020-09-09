const Product = require('../models/goodsSchema');

const getAllProducts = () => Product.find({});
const getProductById = id => Product.findById(id);
const deleteProduct = id => Product.findOneAndDelete(id);
const addNewProduct = (name, price, isAvailable) => {
    return new Product({
        name,
        isAvailable,
        price
    }).save()
};
const editProduct = (_id, payload) => Product.findOneAndUpdate({ _id }, payload, { new: true });
module.exports = {
    getAllProducts,
    getProductById,
    deleteProduct,
    addNewProduct,
    editProduct
}