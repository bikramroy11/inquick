import fs from "fs";
import imagekit from "../configs/imageKit.js";
import Blog from "../models/Blog.js";

import Comment from '../models/Comment.js';

import main from '../configs/gemini.js';

// add a new blog with image(imagekit)
export const addBlog = async (req, res) => {
  try {
    let blogData;
    try {
      blogData = JSON.parse(req.body.blog);
    } catch {
      return res.json({ success: false, message: "Invalid JSON in blog data" });
    }

    const { title, subTitle, description, category, isPublished } = blogData;
    const imageFile = req.file;

    // check required fields
    if (!title || !description || !category || !imageFile) {
      return res.json({ success: false, message: "Missing required field" });
    }

    // read file buffer
    const fileBuffer = fs.readFileSync(imageFile.path);

    // upload to ImageKit
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/blogs",
    });

    // generate optimized URL
    const optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { quality: "auto" },
        { format: "webp" },
        { width: "1280" },
      ],
    });

    // save blog
    await Blog.create({
      title,
      subTitle,
      description,
      category,
      image: optimizedImageUrl,
      isPublished,
    });

    res.json({ success: true, message: "Blog added successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};


// list all blogs
export const getAllBlogs= async(req, res)=>{
  try {
    const blogs= await Blog.find({isPublished: true});
    res.json({success:true, blogs});
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}

// individual blog data
export const getBlogById= async(req, res)=>{
  try {
    const {blogId}=req.params;
    const blog= await Blog.findById(blogId);
    if(!blog){
      return res.json({success: false, message:"blog not found"});
    }else{
      res.json({success:true, blog});
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}

// delete any blog
export const deleteBlogById= async(req, res)=>{
  try {
    const {id}=req.body;
    await Blog.findByIdAndDelete(id);

    //delete all comments associated with this blog
    await Comment.deleteMany({blog: id});
    
    res.json({success:true, message:"blog deleted successfully"});

  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}

// toggle publish:  unpublish <--> publish
export const togglePublish= async(req, res)=>{
  try {
    const {id}=req.body;
    const blog= await Blog.findById(id);
    blog.isPublished = !blog.isPublished;
    await blog.save();
    res.json({success:true, message:"blog status updated"});

  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}

// add comments
export const addComment= async(req, res)=>{
  try {
    const {blog, name, content}=req.body;
    await Comment.create({blog, name, content});
    res.json({ success: true, message: "comment added for review" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}

// comment data for individual content
export const getBlogComments= async(req, res)=>{
  try {
    const {blogId}=req.body;
    const comments= await Comment.find({blog: blogId, isApproved: true}).sort({createdAt: -1});
    res.json({ success: true, comments });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}




// genai
export const generateContent=async(req, res)=>{
  try {
    const {prompt}=req.body;
    const content = await main(prompt + 'Create a compelling, well-structured blog article based on the provided title and subtitle. The writing style should be fluent, engaging, and suitable for a general online audience. Maintain a clear logical flow with an informative introduction, insightful body sections, and a thoughtful conclusion. Use natural transitions between ideas, add relevant real-world examples or statistics if appropriate, and keep the tone conversational yet refined. Ensure:Clarity and readability (avoid jargon and unnecessary complexity), SEO-friendly phrasing with natural keyword placement, Proper article formatting with headings, subheadings, and short paragraphs, A professional, authentic, and value-driven tone.')
    res.json({success:true, content})
  } catch (error) {
    res.json({success:false, message:error.message})
  }
}