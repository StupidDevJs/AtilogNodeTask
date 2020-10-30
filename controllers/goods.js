const {
  getAllProducts,
  getProductById,
  deleteProduct,
  addNewProduct,
  editProduct,
} = require("../services/products");

module.exports = {
  getProduct: async (req, res, next) => {
    try {
      const product = await getAllProducts();
      res.json(product);
    } catch (err) {
      next(err);
    }
    next();
  },
  getById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await getProductById(id);
      res.json(product);
    } catch (err) {
      next(err);
    }
  },
  createProduct: async (req, res, next) => {
    try {
      const { name, isAvailable, price, description } = req.body;
      const newProduct = await addNewProduct(name, price, isAvailable, description);
      res.status(200).json(newProduct);
    } catch (err) {
      if (/duplicate key error/.test(err.message)) {
        next({
          statusCode: 400,
          message: 'duplicate error',
          data: Object.keys(err.keyValue)
        });
      } else {
        next(err);
      }
    }
  },
  editProduct: async (req, res, next) => {
    try {
      const {body, params: {id}} = req;
      const editedProduct = await editProduct(id, body);
      res.json({ editedProduct });
    } catch (err) {
      next(err);
    }
  },
  deleteProduct: async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedProduct = await deleteProduct({ _id: id });
      console.log('deletedProduct', deletedProduct)
      res.status(204);
    } catch (err) {
      next(err);
    }
  },
};
