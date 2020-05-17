const bodyParser = require('body-parser');
const express = require('express');

const router = express.Router();

// Register middlewares
router.use(bodyParser.json()); // for POST params

module.exports = router;
