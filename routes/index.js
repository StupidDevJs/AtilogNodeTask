const express = require('express');
const router = express.Router();
const AuthMiddleware = require('../middleware/auth')
router.use(require('./auth.js'));
router.use(AuthMiddleware,require('./goods.js'),);
module.exports = router;