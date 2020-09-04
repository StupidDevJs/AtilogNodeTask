const { getAllProducts,getProductById,deleteProduct,addNewProduct,editProduct } = require("../services/products");

module.exports = {
  get: async (req, res,next) => {
    if (req.params){
      try {
        const product = await getAllProducts();
        res.json(product);
      } catch (err) {
        next(err)
      }
    }
    next()
  },

  getById: async (req, res,next) => {
    if (req.params.id) {
      const { id } = req.params;
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
      res.status(200).json(newProduct);
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
