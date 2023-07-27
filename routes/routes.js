const express = require('express');
const router = express.Router();
const { getVideos } = require('../controllers/rest/restVideo.js')
const {getProduct} = require('../controllers/rest/restProduct.js')
const { getComment, createComment } = require('../controllers/rest/restComment.js')

router.get('/video', getVideos)
router.get('/product/:videoId', getProduct)
router.get('/comment/:videoId', getComment)
router.post('/comment', createComment)


module.exports = router;
