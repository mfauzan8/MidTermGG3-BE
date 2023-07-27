const productRepo = require("../repositories/products/productRepo")

const productUsecase = async (videoId) => {
    try {
        const productList = await productRepo(videoId);
        if (productList.length == 0) {
            return null;
        }
        return productList
    } catch (error) {
        throw error
    }
}

module.exports = productUsecase;