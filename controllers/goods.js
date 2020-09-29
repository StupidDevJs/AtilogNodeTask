const {
  getAllProducts,
  getProductById,
  deleteProduct,
  addNewProduct,
  editProduct,
} = require("../services/products");

module.exports = {
  get: async (req, res, next) => {
    if (req.params) {
      try {
        const product = await getAllProducts();
        res.json(product);
      } catch (err) {
        next(err);
      }
    }
    next();
  },
  getById: async (req, res, next) => {
    if (req.params.id) {
      const { id } = req.params;
      try {
        const product = await getProductById(id);
        res.json(product);
      } catch (err) {
        next(err);
      }
    }
  },
  post: async (req, res, next) => {
    const { name, isAvailable, price, description} = req.body;
    try {
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
  put: async (req, res, next) => {
    try {
      const { body } = req;
      const { id } = req.params;
      const editedProduct = await editProduct(id, body);
      res.json({ editedProduct });
    } catch (err) {
      next(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedProduct = await deleteProduct({ _id: id });
      console.log('deletedProduct', deletedProduct)
      res.send({ deletedProduct });
    } catch (err) {
      next(err);
    }
  },
};
