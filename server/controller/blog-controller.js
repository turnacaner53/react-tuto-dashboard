const mongoose = require('mongoose');
const Blog = require('../model/blog');

// get blog by id
const getBlog = async (req, res) => {
  const { id } = req.params;
  let blog;

  try {
    blog = await Blog.findById(id);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  if (!blog) {
    res.status(404).json({ message: 'Blog not found' });
  }

  return res.status(200).json(blog);
};

// list all blogs
const listBlogs = async (req, res) => {
  let blogList;
  try {
    blogList = await Blog.find();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  if (!blogList) {
    res.status(404).json({ message: 'No blogs found' });
  }

  return res.status(200).json(blogList);
};

// create a blog
const createBlog = async (req, res) => {
  const { title, content } = req.body;
  const currentDate = new Date();

  const newBlog = new Blog({ title, content, date: currentDate });

  try {
    await newBlog.save();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await newBlog.save({ session });
    await session.commitTransaction();
  } catch (error) {
    res.send(500).json({ error: error.message });
  }

  return res.status(201).json(newBlog);
};

// update a blog
const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  let blog;

  try {
    blog = await Blog.findByIdAndUpdate(id, { title, content });
    if (!blog) res.status(404).json({ message: 'Blog not found' });

    return res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Unable to update! Try again.' });
  }
};

// delete a blog
const deleteBlog = async (req, res) => {
  const { id } = req.params;
  let blog;

  try {
    blog = await Blog.findByIdAndDelete(id);
    if (!blog) res.status(404).json({ message: 'Blog not found' });

    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Unable to delete! Try again.' });
  }
};

module.exports = { getBlog, listBlogs, createBlog, updateBlog, deleteBlog };
