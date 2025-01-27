const express = require('express');
const path = require('path');
const router = express.Router();

//routes
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/about.html'));
});

router.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/contact.html'));
});

module.exports = router;
