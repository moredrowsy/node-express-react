const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.get('/', userController.index);
router.get('/username/:username', userController.showByUserName);
router.post('/', userController.index);
router.post('/username/:username', userController.showByUserName);

module.exports = router;
