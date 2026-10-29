
const postData = require("../data/postData");

// getAllPost
function getAllPost(req, res) {
    try {
        res.status(200).json({
            success: true,
            message: `All posts fetched successfully`,
            body: postData
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Network Error",
            error: err.message
        })
    }
}

// getSinglePost
function getSinglePost(req, res) {
    try {
        let postId = req.params.id;
        let obj = postData.find(p => p.id === postId);

        if (!obj) {
            return res.status(404).json({
                success: false,
                message: `Your post Not Found`,
            })
        }

        res.status(200).json({
            success: true,
            message: `Post with id ${postId} is fetched successfully`,
            body: obj
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Network Error",
            error: err.message
        })
    }
}

// createPost

function createPost(req, res) {
    try {
        let postObj = {
            ...req.body,
            id: Date.now().toString()
        }

        postData.push(postObj);

        res.status(201).json({
            success: true,
            message: `Post data created successfully`,
            body: postObj
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Major Network Issue",
            error: err.message
        })
    }
}

// updatePost

function updatePost(req, res) {
    try {
        let updateId = req.params.id;

        let getIndex = postData.findIndex(p => p.id === updateId);

        if (getIndex === -1) {
            return res.status(404).json({
                success: false,
                message: `Post Not Found`
            })
        }

        let obj = postData[getIndex]

        let updatedObj = {
            ...obj,
            ...req.body,
            id: updateId
        }

        postData[getIndex] = updatedObj

        res.status(200).json({
            success: true,
            message: `Post Data updated successfully with id ${updateId}`,
            body: updatedObj
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Major Network Issue",
            error: err.message
        })
    }
}

// deletePost

function deletePost(req, res) {
    try {
        let deleteId = req.params.id;

        let getIndex = postData.findIndex(p => p.id === deleteId);

        if (getIndex === -1) {
            return res.status(404).json({
                success: false,
                message: `Post Not Found`
            })
        }

        let arr = postData.splice(getIndex, 1);

        res.status(200).json({
            success: true,
            message: `Post Data Deleted successfully with id ${deleteId}`,
            body: arr[0]
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: `Network Error`,
            error: err.message
        })
    }
}

module.exports = {
    getAllPost,
    getSinglePost,
    createPost,
    updatePost,
    deletePost
}