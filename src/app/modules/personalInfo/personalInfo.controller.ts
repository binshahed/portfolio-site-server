import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { personalInfoService } from './personalInfo.service'; // Make sure this import points to your service file

// Create new personal information
const createPersonalInfo = catchAsync(async (req, res) => {
  const result = await personalInfoService.createPersonalInfo(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Personal information created successfully',
    data: result,
  });
});

// Get all personal information
const getPersonalInfo = catchAsync(async (req, res) => {
  const result = await personalInfoService.getPersonalInfo();

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Personal information retrieved successfully',
    data: result,
  });
});

// Update personal information by ID
const updatePersonalInfoById = catchAsync(async (req, res) => {
  const result = await personalInfoService.updatePersonalInfoById(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Personal information updated successfully',
    data: result,
  });
});

export const personalInfoController = {
  createPersonalInfo,
  updatePersonalInfoById,
  getPersonalInfo,
};
