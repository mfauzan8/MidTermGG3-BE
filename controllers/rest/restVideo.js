const getVideosUsecase = require("../../usecases/getVideosUsecase")

const getVideos = async (req, res) => {
    try {
        const videos = await getVideosUsecase();
        res.status(200).json({
            status: 'success',
            list_videos: videos,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getVideos };