/* eslint-disable @typescript-eslint/no-explicit-any */

import { blogService } from './blog.service';

import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';

const createBlog = catchAsync(async (req, res) => {
  const result = await blogService.createBlog(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog created successfully',
    data: result,
  });
});

const updateBlog = catchAsync(async (req, res) => {
  const { blogId } = req.params;
  const user = req.user;
  const result = await blogService.updateBlog(
    user?._id,
    blogId as any,
    req.body,
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog updated successfully',
    data: result,
  });
});

const getAllBlogs = catchAsync(async (req, res) => {
  const result = await blogService.getAllBlogs(req.query);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'All blogs retrieved successfully',
    data: result,
  });
});

const blogDetails = catchAsync(async (req, res) => {
  const { blogId } = req.params;
  const result = await blogService.blogDetails(blogId as any);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog details retrieved successfully',
    data: result,
  });
});

const deleteBlog = catchAsync(async (req, res) => {
  const { blogId } = req.params;
  const user = req.user;
  const result = await blogService.deleteBlog(user?._id, blogId as any);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog deleted successfully',
    data: result,
  });
});

export const blogController = {
  createBlog,
  getAllBlogs,

  blogDetails,

  updateBlog,
  deleteBlog,
};
