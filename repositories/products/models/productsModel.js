const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    link_product: {
        type: String,
        required: true,
    },
    price_product: {
        type: Number,
        required: true,
    },
    video: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'video',
    },
});

module.exports = mongoose.model('Product', productSchema)
