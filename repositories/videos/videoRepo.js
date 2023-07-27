const videoModel = require("./models/videoModel")

const videoRepo = async () => {
    try {
        const list = await videoModel.find();
        return list;
    } catch (err) {
        throw new Error(err.message);
    }
};

module.exports = videoRepo;