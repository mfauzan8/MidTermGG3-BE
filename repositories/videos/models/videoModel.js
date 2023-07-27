const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  video_url: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('video', videoSchema)
