const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now(),
    },
    videoId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'video',
    },
});

module.exports = mongoose.model('comment', commentSchema)
