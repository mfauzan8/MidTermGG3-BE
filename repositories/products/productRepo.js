const Video = require("../videos/models/videoModel");
const productsModel = require("./models/productsModel");

const productRepo = async (videoId) => {
    try {
        const products = await productsModel.find({ video: videoId }).select('-video');
        return products
    } catch (err) {
        throw new Error(err.message);
    }
};

module.exports = productRepo;