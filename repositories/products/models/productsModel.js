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
        type: Schema.Types.ObjectId,
        ref: 'Video',
    },
});

module.exports = mongoose.model('Product', productSchema)
