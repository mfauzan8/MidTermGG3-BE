const productsModel = require("./models/productsModel");

const productRepo = async (videoId) => {
    try {
        const products = await productsModel.find({ videoId }).select('-videoId');
        return products
    } catch (err) {
        throw new Error(err.message);
    }
};

module.exports = productRepo;