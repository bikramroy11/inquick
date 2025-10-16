
import express from 'express';
import {addBlog, getAllBlogs, getBlogById, deleteBlogById, togglePublish, addComment, getBlogComments} from '../controllers/blogController.js';
import upload from '../middleware/multer.js';
import auth from '../middleware/auth.js';

import {generateContent} from '../controllers/blogController.js'

const blogRouter= express.Router();

// router for blog data
blogRouter.post('/add', upload.single('image'), auth, addBlog); // upload.single() means only one image
blogRouter.get("/all", getAllBlogs);
blogRouter.get("/:blogId", getBlogById);
blogRouter.post("/delete", auth, deleteBlogById); //'auth' middleware allow only admin to delete
blogRouter.post("/toggle-publish", auth, togglePublish);

//router for comment data
blogRouter.post("/add-comment", addComment);
blogRouter.post("/comments", getBlogComments);

//route for genai
blogRouter.post("/generate", auth, generateContent);


export default blogRouter;







