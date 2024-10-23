
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { projectService } from './projects.service';

// create a new service
const createProject = catchAsync(async (req, res) => {
  const result = await projectService.createProject(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Project created successfully',
    data: result,
  });
});

// get all services
const getAllProjects = catchAsync(async (req, res) => {
  const result = await projectService.getAllProjects();

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Projects retrieved successfully',
    data: result,
  });
});
// get all services
const getAllProjectsAdmin = catchAsync(async (req, res) => {
  const result = await projectService.getAllProjectsAdmin(req.query);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Projects retrieved successfully',
    data: result,
  });
});
const getProjectById = catchAsync(async (req, res) => {
  const result = await projectService.getProjectById(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Project retrieved successfully',
    data: result,
  });
});

const updateProjectById = catchAsync(async (req, res) => {
  const result = await projectService.updateProjectById(
    req.params.id,
    req.body,
  );

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Project updated successfully',
    data: result,
  });
});

const deleteProjectById = catchAsync(async (req, res) => {
  console.log('first');
  
  const result = await projectService.deleteProjectById(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Project deleted successfully',
    data: result,
  });
});

export const projectController = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProjectById,
  deleteProjectById,
  getAllProjectsAdmin,
};
