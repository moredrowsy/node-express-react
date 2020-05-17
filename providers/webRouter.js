const express = require('express');
const path = require('path');

const router = express.Router();

// Serve static public assets in '/public' route
router.use('/public', express.static(path.join(__dirname, '../public')));

// Serve static files from React's build
const clientPath = path.join(__dirname, '../client/build');
router.use(express.static(clientPath));

// Register web routes to React's entry point
const clientFile = path.join(clientPath, 'index.html');
router.get(['/', '/about', '/project/:id'], (req, res) =>
  res.sendFile(clientFile)
);

router.get('*', (req, res) => res.status(404).sendFile(clientFile));

module.exports = router;
