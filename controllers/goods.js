const Product = require("../models/goodsSchema");
const { getAllPoducts } = require("../services/products");

module.exports = {
  get: async (req, res) => {
    try {
      const product = await getAllPoducts();
      res.json(product);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getById: async (req, res) => {
    const { id } = req.params;
    if (req.params.id) {
      try {
        const product = await getProductById(id);
        return res.json(product);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    }
  },

  post: async (req, res) => {
    const product = new Product({
      name: req.body.name,
      isAvailable: req.body.isAvailable,
      price: req.body.price,
    });
    try {
      const newProduct = await product.save();
      res.status(201).json(newProduct);
    } catch (err) {}
  },

  put: async (req, res) => {
    try {
      const editedProduct = await Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      res.json({ editedProduct });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      const deletedProduct = await Product.findOneAndDelete({
        _id: req.params.id,
      });
      res.send({ deletedProduct });
    } catch (err) {
      res.status(600).json({ message: err.message });
    }
  },
};
