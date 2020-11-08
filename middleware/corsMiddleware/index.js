const cors = require('cors');
const express = require('express');
const allowlist = require('./allowlist');

const router = express.Router();

const corsOptionsDelegate = (req, callback) => {
  let corsOptions;

  // Enable CORS if origin is in allowlist
  if (allowlist.indexOf(req.header('Origin')) !== -1)
    corsOptions = { origin: true };
  // Disable CORS not in allowlist
  else corsOptions = { origin: false };

  // Callback expects two parameters: error and options
  callback(null, corsOptions);
};

// Use CORS middleware
router.use(cors(corsOptionsDelegate));

module.exports = router;
