const express = require('express');
const userRoute = require('../routes/user.route');

const router = express.Router();

// Register API routes
router.use('/user', userRoute);

module.exports = router;
