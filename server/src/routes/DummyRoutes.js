const express = require("express");

const { getDummyData, setDummyData } = require('../controllers/DummyController');

const router = express.Router();
 
router.route("/").get(getDummyData).post(setDummyData);
// router.route("/:id").get(getBlogById).put(updateBlog).delete(deleteBlog);
 
module.exports = router;