const productUsecase = require("../../usecases/productUsecase")

const restProduct = async (req, res) => {
    const { videoId } = req.params
    try {
        const productList = await productUsecase(videoId);
        res.status(200).json({
            status: 'success',
            products: productList
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { restProduct };