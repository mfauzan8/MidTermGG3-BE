const commentModel = require("./models/commentModel");

const productRepo = async (videoId) => {
    try {
        const comment = await commentModel.find({ videoId }).select('-videoId');
        return comment
    } catch (err) {
        throw new Error(err.message);
    }
};

module.exports = productRepo;