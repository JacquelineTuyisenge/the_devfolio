import e, { Request, Response } from 'express';
import { Blog } from '../models/blog';
import cloudinary from '../utils/cloudinary';

export const getAllBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await Blog.findAll();
    res.json(blogs);
  } catch (err) {
    console.error(err); // Optional: log for debugging
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
};

export const getBlogById = async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    if (!blog) {
        res.status(404).json({ error: 'Blog not found' });
        return;
    }
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch blog' });
  }
};

export const createBlog = async (req: Request, res: Response) => {
    try {
      const { title, content } = req.body;
  
      if (!title || !content || !req.file) {
        res.status(400).json({ error: 'Title, content, and image are required' });
        return;
      }

        if (!req.file) {
          res.status(400).json({ error: 'Image file is required' });
          return;
        }
        
        const result = await cloudinary.uploader.upload(req.file.path, {
          folder: 'blogs',
        });
  
      const words = content.trim().split(/\s+/).length;
      const readTime = `${Math.ceil(words / 200)} min Read`;
  
      const newBlog = await Blog.create({ title, content, imageUrl: result.secure_url, readTime });
  
      res.status(201).json({
        message: 'Blog created successfully',
        blog: newBlog,
      });
    } catch (err: any) {
      console.error('🔥 Error creating blog:', err);
      res.status(500).json({ error: 'Failed to create blog', details: err.message });
    }
  };

export const updateBlog = async (req: Request, res: Response) => {
    try {
      const { title, content } = req.body;
      if (!req.file) {
        res.status(400).json({ error: 'Image file is required' });
        return;
      }
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'blogs',
    });
      const blog = await Blog.findByPk(req.params.id);
      if (!blog) {
        res.status(404).json({ error: 'Blog not found' });
        return;
      }
  
      blog.title = title;
      blog.content = content;
      blog.imageUrl = result.secure_url;
      blog.readTime = `${Math.ceil(content.split(/\s+/).length / 200)} min`;
  
      await blog.save();
      res.json(blog);
    } catch (err) {
      res.status(500).json({ error: 'Failed to update blog' });
    }
  };

export const deleteBlog = async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    if (!blog) {
        res.status(404).json({ error: 'Blog not found' });
        return;
    }
    await blog.destroy();
    res.json({ message: 'Blog deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete blog' });
  }
};
