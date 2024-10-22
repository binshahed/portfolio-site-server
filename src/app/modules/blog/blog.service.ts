/* eslint-disable @typescript-eslint/no-explicit-any */
import { Types } from 'mongoose';
import { QueryBuilder } from '../../builder/QueryBuilder';
import { TBlog } from './blog.interface';
import BlogModel from './blog.model';
import AppError from '../../errors/AppError';

const createBlog = async (payload: TBlog) => {
  // Implement the blog creation logic here, using the provided payload
  // Return the created blog object

  // Example implementation
  const blog = await BlogModel.create(payload);
  return blog;
};

const updateBlog = async (
  user: any,
  blogId: string,
  payload: Partial<TBlog>,
) => {
  // Check if the blog exists and belongs to the user
  const isBlogExist = await BlogModel.findById(blogId);

  if (!isBlogExist) {
    throw new AppError(
      404,
      'Blog not found or you do not have permission to edit this blog',
    );
  }

  // Use a single query to find and update the blog
  const updatedBlog = await BlogModel.findOneAndUpdate(
    { _id: blogId }, // Ensure the user owns the blog
    { ...payload }, // Update the blog with the payload data
    {
      new: true, // Return the updated document
      runValidators: true, // Ensure validators are run on update
    },
  );

  // Check if the blog was updated successfully
  if (!updatedBlog) {
    throw new AppError(
      404,
      'Blog not found or you do not have permission to edit this blog',
    );
  }

  return updatedBlog;
};

const getAllBlogs = async (query: Record<string, unknown>) => {
  // Implement the logic to retrieve all blogs from the database
  // Return an array of blog objects

  const blogQuery = new QueryBuilder(BlogModel.find(), query)
    .search(['title', 'slug', 'content'])
    .paginate()
    .sort()
    .fields();

  return blogQuery.modelQuery.exec();
};

const blogDetails = async (id: any) => {
  const blog = await BlogModel.findById(id);

  return blog;
};

const deleteBlog = async (blogId: Types.ObjectId) => {
  const blog = await BlogModel.findById(blogId);
  if (!blog) {
    throw new AppError(
      404,
      'Blog not found or you do not have permission to delete this blog',
    );
  }

  const deletedData = await BlogModel.findByIdAndDelete(blog._id);

  return deletedData;
};

export const blogService = {
  createBlog,
  getAllBlogs,

  blogDetails,

  updateBlog,
  deleteBlog,
};
