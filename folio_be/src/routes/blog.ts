import express from 'express';
import { getAllBlogs, getBlogById, createBlog, updateBlog, deleteBlog } from '../controllers/blog';
import upload from '../middlewares/multer';
import { isAdmin } from "../middlewares/isAdmin";

const router = express.Router();

router.get('/', getAllBlogs);
router.get('/:id', getBlogById);
router.post('/', isAdmin, upload.single('image'), createBlog); // image field in form-data
router.patch('/:id', isAdmin, upload.single('image'), updateBlog);
router.delete('/:id', isAdmin, deleteBlog);

export default router;