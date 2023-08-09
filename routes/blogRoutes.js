const express = require("express");
const {
  getAllBlogsController,
  createBlogController,
  updateBlogController,
  deleteBlogController,
  getBlogByIdController,
  userBlogControlller,
} = require("../controlers/blogController");

// router object
const router = express.Router();

// routes
// GET-ALL BLOGS
router.get("/all-blog", getAllBlogsController);

// POST || CREATE BLOG
router.post("/create-blog", createBlogController);

// PUT || UPDATE BLOG
router.put("/update-blog/:id", updateBlogController);

//DELETE || DELETE BLOG
router.delete("/delete-blog/:id", deleteBlogController);

//GET || SINGLE BLOG DETAILS
router.get("/get-blog/:id", getBlogByIdController);

// Get || user blog
router.get("/user-blog/:id", userBlogControlller);

module.exports = router;
