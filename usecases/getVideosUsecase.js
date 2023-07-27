const videoRepo = require("../repositories/videos/videoRepo")

const getVideosUsecase = async () => {
    try {
        const videoList = await videoRepo();
        if (videoList.length == 0) {
            return null;
        }
        return videoList
    } catch (error) {
        throw error
    }
}

module.exports = getVideosUsecase;