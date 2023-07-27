const { commentRepo, addCommentRepo } = require("../repositories/comment/commentRepo")

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

const addCommentUsecase = async (videoId, username, comment) => {
    try {
        const result = await addCommentRepo(videoId, username, comment);
        console.log(result)
        return { success: true };
    } catch (error) {
        throw new Error('Failed to add comment');
    }
}

module.exports = { commentUsecase, addCommentUsecase };