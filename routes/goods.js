const router = require('express').Router();
const goodsController = require('../controllers/goods');
router.get('/products', goodsController.getProduct);
router.get('/products/:id', goodsController.getById);
router.post('/products', goodsController.createProduct);
router.put('/products/:id', goodsController.editProduct);
router.delete('/products/:id', goodsController.deleteProduct);
module.exports = router;