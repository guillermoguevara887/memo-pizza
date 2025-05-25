const express = require('express');
const router = express.Router();
const { getAllProducts } = require('../controllers/productosController');


router.get('/', getAllProducts);

module.exports = router;