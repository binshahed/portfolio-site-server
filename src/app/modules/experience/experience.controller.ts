import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { experienceService } from './experience.service';

// create a new experience
const createExperience = catchAsync(async (req, res) => {
  const result = await experienceService.createExperience(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Experience created successfully',
    data: result,
  });
});

// get all experiences
const getAllExperience = catchAsync(async (req, res) => {
  const result = await experienceService.getAllExperiences(req.query);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Experiences retrieved successfully',
    data: result,
  });
});

// get experience by ID
const getExperienceById = catchAsync(async (req, res) => {
  const result = await experienceService.getExperienceById(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Experience retrieved successfully',
    data: result,
  });
});

// update experience by ID
const updateExperienceById = catchAsync(async (req, res) => {
  const result = await experienceService.updateExperienceById(req.params.id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Experience updated successfully',
    data: result,
  });
});

// delete experience by ID
const deleteExperienceById = catchAsync(async (req, res) => {
  const result = await experienceService.deleteExperienceById(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Experience deleted successfully',
    data: result,
  });
});

export const experienceController = {
  createExperience,
  deleteExperienceById,
  updateExperienceById,
  getExperienceById,
  getAllExperience,
};
