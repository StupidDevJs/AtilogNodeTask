const router = require('express').Router();
const usersController = require('../controllers/auth');
router.post('/sign-up', usersController.register);
router.post('/sign-in', usersController.auth);
module.exports = router;