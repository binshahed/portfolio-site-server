import { Router } from 'express';
import { blogController } from './blog.controller';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { blogValidation } from './blog.validation';

const router = Router();

router
  .route('/')
  .get(blogController.getAllBlogs)
  .post(
    auth('admin', 'user'),
    validateRequest(blogValidation.createBlogValidationSchema),
    blogController.createBlog,
  );

router
  .route('/:blogId')
  .get(blogController.blogDetails)
  .patch(
    auth('admin', 'user'),
    validateRequest(blogValidation.updateBlogValidation),
    blogController?.updateBlog,
  )
  .delete(auth('admin', 'user'), blogController.deleteBlog);

export const blogRouter = router;
