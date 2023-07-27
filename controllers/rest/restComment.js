const { commentUsecase, addCommentUsecase } = require("../../usecases/commentUsecase")

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
    try {
        const { videoId, username, comment } = req.body;

        if (!videoId || !username || !comment) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Call the use case to add the comment
        const result = await addCommentUsecase(videoId, username, comment);

        if (result.success) {
            return res.status(201).json({ status: 'success', comment: result.comment });
        } else {
            return res.status(500).json({ error: error.message });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to add comment' });
    }
}


module.exports = { getComment, createComment };