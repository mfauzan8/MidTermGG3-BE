const commentUsecase = require("../../usecases/commentUsecase")

const getComment = async (req, res) => {
    const { videoId } = req.params;
    try {
        const commentList = await commentUsecase(videoId);
        res.status(200).json({
            status: 'success',
            comment: commentList
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createComment = async (req, res) => {

}


module.exports = { getComment,createComment };