const express = require('express');
const corsMiddleware = require('../middlewares/corsMiddleware');

const router = express.Router();

// Register middlewares
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(corsMiddleware);

module.exports = router;
