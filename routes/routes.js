const express = require('express');
const router = express.Router();
const Video = require('../controllers/rest/restVideo.js')
const Product = require('../controllers/rest/restProduct.js')

router.get('/video', Video.restVideo)
router.get('/product/:videoId', Product.restProduct)

module.exports = router;
