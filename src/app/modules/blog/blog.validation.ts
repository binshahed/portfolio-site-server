
import { z } from 'zod';



const createBlogValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, 'Title is required'),
    slug: z.string().min(1, 'Slug is required'),
    content: z.string().min(1, 'Content is required'),
    featuredImage: z.string().url(),
   
  }),
});
const updateBlogValidation = z.object({
  body: z.object({
    title: z.string().min(1, 'Title is required').optional(),
    slug: z.string().min(1, 'Slug is required').optional(),
    content: z.string().min(1, 'Content is required').optional(),
    featuredImage: z.string().url().optional(),
  }),
});

export const blogValidation = {
  createBlogValidationSchema,
  updateBlogValidation,
};
