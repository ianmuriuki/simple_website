const express = require('express'); // import express 
const path = require('path'); // import path
const router = express.Router(); // create router

//routes with directory path to the view files.
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
