import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { educationService } from './education.service';

// create a new service
const createEducation = catchAsync(async (req, res) => {
  const result = await educationService.createEducation(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Education created successfully',
    data: result,
  });
});

// get all services
const getAllEducation = catchAsync(async (req, res) => {
  const result = await educationService.getAllEducations();

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Educations retrieved successfully',
    data: result,
  });
});
// get all services

const getEducationById = catchAsync(async (req, res) => {
  const result = await educationService.getEducationById(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Education retrieved successfully',
    data: result,
  });
});

const updateEducationById = catchAsync(async (req, res) => {
  const result = await educationService.updateEducationById(
    req.params.id,
    req.body,
  );

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Education updated successfully',
    data: result,
  });
});

const deleteEducationById = catchAsync(async (req, res) => {
  const result = await educationService.deleteEducationById(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Education deleted successfully',
    data: result,
  });
});

export const educationController = {
  createEducation,
  deleteEducationById,
  updateEducationById,
  getEducationById,
  getAllEducation,
};
