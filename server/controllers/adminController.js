import jwt from 'jsonwebtoken';
import Blog from '../models/Blog.js';
import Comment from '../models/Comment.js';

// Admin login
export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
      return res.json({ success: false, message: "Invalid Credentials" });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ success: true, token });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Get all blogs (published or not) for admin
export const getAllBlogsAdmin = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 }); // sort descending by createdAt
    res.json({ success: true, blogs });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Get all comments with blog data populated
export const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find({})
      .populate("blog")
      .sort({ createdAt: -1 }); // sort descending by createdAt
    res.json({ success: true, comments });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Dashboard data
export const getDashboard = async (req, res) => {
  try {
    const recentBlogs = await Blog.find({})
      .sort({ createdAt: -1 }) // descending order
      .limit(5);

    const totalBlogs = await Blog.countDocuments();
    const totalComments = await Comment.countDocuments();
    const totalDrafts = await Blog.countDocuments({ isPublished: false });

    const dashboardData = {
      blogs: totalBlogs,
      comments: totalComments,
      drafts: totalDrafts,
      recentBlogs
    };

    res.json({ success: true, dashboardData });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Delete a comment by ID
export const deleteCommentById = async (req, res) => {
  try {
    const { id } = req.body;
    await Comment.findByIdAndDelete(id);
    res.json({ success: true, message: "Comment deleted successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Approve a comment by ID
export const approveCommentById = async (req, res) => {
  try {
    const { id } = req.body;
    await Comment.findByIdAndUpdate(id, { isApproved: true });
    res.json({ success: true, message: "Comment approval status updated" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
