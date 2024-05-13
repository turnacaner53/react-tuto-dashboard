const express = require('express');
const blogRouter = express.Router();

const {getBlog, listBlogs, createBlog, updateBlog, deleteBlog } = require('../controller/blog-controller');

blogRouter.get('/:id', getBlog);
blogRouter.get('/', listBlogs);
blogRouter.post('/create', createBlog);
blogRouter.put('/update/:id', updateBlog);
blogRouter.delete('/delete/:id', deleteBlog);

module.exports = blogRouter;