import express from 'express';
import { getAllBlogs, getBlogById, createBlog, updateBlog, deleteBlog } from '../controllers/blog';
import upload from '../middlewares/multer';
import cloudinary from '../utils/cloudinary';

const router = express.Router();

router.get('/', getAllBlogs);
router.get('/:id', getBlogById);
router.post('/', upload.single('image'), createBlog); // image field in form-data
router.patch('/:id', upload.single('image'), updateBlog);
router.delete('/:id', deleteBlog);

export default router;