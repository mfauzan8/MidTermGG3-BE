const express = require('express');
const router = express.Router();
const Video = require('../controllers/rest/restVideo.js')

router.get('/video', Video.restVideo)
router.get('/product/:videoId', Video.restVideo)

module.exports = router;
