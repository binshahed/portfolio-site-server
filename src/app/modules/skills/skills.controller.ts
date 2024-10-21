import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { skillService } from './skills.service';


// create a new service
const createSkill = catchAsync(async (req, res) => {
  const result = await skillService.createSkill(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Skill created successfully',
    data: result,
  });
});

// get all services
const getAllSkill = catchAsync(async (req, res) => {
  const result = await skillService.getAllSkills(req.query);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Skills retrieved successfully',
    data: result,
  });
});
// get all services

const getSkillById = catchAsync(async (req, res) => {
  const result = await skillService.getSkillById(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Skill retrieved successfully',
    data: result,
  });
});

const updateSkillById = catchAsync(async (req, res) => {
  const result = await skillService.updateSkillById(req.params.id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Skill updated successfully',
    data: result,
  });
});

const deleteSkillById = catchAsync(async (req, res) => {
  const result = await skillService.deleteSkillById(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Skill deleted successfully',
    data: result,
  });
});

export const skillController = {
  createSkill,
  deleteSkillById,
  updateSkillById,
  getSkillById,
  getAllSkill,
};
