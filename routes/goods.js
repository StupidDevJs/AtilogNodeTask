const router = require('express').Router();
const goodsController = require('../controllers/goods');
router.get('/products', goodsController.get);
router.get('/products/:id', goodsController.getById);
router.post('/products', goodsController.post);
router.put('/products/:id', goodsController.put);
router.delete('/products/:id', goodsController.delete);
module.exports = router;