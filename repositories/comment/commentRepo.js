const commentModel = require("./models/commentModel");

const commentRepo = async (videoId) => {
    try {
        const comment = await commentModel.find({ videoId }).select('-videoId');
        return comment
    } catch (err) {
        throw new Error(err.message);
    }
};
const addCommentRepo = async (videoId, username, comment) => {
    try {
        const newComment = new commentModel({
            videoId: videoId,
            username,
            comment
        });

        const savedComment = await newComment.save();

        return savedComment;
    } catch (error) {
        throw new Error('Fail');
    }
};

module.exports = { commentRepo, addCommentRepo };