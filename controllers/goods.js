const { getAllProducts,getProductById,deleteProduct,addNewProduct,editProduct } = require("../services/products");

module.exports = {
  get: async (req, res,next) => {
    try {
      const product = await getAllProducts();
      res.json(product);
    } catch (err) {
     next(err)
    }
  },

  getById: async (req, res,next) => {
    const { id } = req.params;
    if (req.params.id) {
      try {
        const product = await getProductById(id);
        res.json(product);
      } catch (err) {
        next(err)
      }
    }
  },

  post: async (req, res,next) => {
    const {name, isAvailable, price} = req.body
    try {
      const newProduct = await addNewProduct(name,price,isAvailable)
      res.status(201).json(newProduct);
    } catch (err) {
      next(err)
    }
  },

  put: async (req, res,next) => {
    try {
      const editedProduct = await editProduct(
        req.params.id ,
        req.body,
      );
      res.json({ editedProduct });
    } catch (err) {
     next(err)
    }
  },

  delete: async (req, res,next) => {
    try {
      const deletedProduct = await deleteProduct({_id:req.params.id});
      res.send({ deletedProduct });
    } catch (err) {
      next(err)
    }
  },
};
