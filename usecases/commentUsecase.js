const commentRepo = require("../repositories/comment/commentRepo")

const commentUsecase = async (videoId) => {
    try {
        const commentList = await commentRepo(videoId);
        if (commentList.length == 0) {
            throw new Error('No comment found');
        }
        return commentList
    } catch (error) {
        throw error
    }
}

module.exports = commentUsecase;