let express = require("express");

let router = express.Router();

let postController = require("../controller/postController")

router.get("/", postController.getAllPost)
router.get("/:id", postController.getSinglePost)
router.post("/", postController.createPost)
router.patch("/:id", postController.updatePost)
router.delete("/:id", postController.deletePost)

module.exports = router;