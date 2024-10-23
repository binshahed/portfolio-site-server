import AppError from '../../errors/AppError';
import { TProject } from './projects.interface';
import { ProjectModel } from './projects.model';

import { QueryBuilder } from '../../builder/QueryBuilder';

const createProject = async (payLoad: TProject) => {
  const service = await ProjectModel.create(payLoad);
  if (!service) {
    throw new AppError(400, 'Project is not created');
  }
  return service;
};

const getAllProjects = async () => {
  const services = await ProjectModel.find().sort({ createdAt: -1 });

  return services;
};
const getAllProjectsAdmin = async (query: Record<string, unknown>) => {
  // Create the base query using the QueryBuilder
  const services = new QueryBuilder(ProjectModel.find(), query)
    .search(['name', 'description'])
    .filter([
      'searchTerm',
      'sort',
      'order',
      'limit',
      'page',
      'fields',
      'priceRange',
    ])
    .sort()
    .paginate()
    .fields();

  // Execute the query to get the results
  const serviceResult = await services.modelQuery.exec();

  // Fetch the total count of documents without pagination filters
  const totalCount = await ProjectModel.countDocuments(services.filterQuery);

  // Extract pagination parameters from the query
  const page = query.page ? parseInt(query.page as string, 10) : 1;
  const limit = query.limit ? parseInt(query.limit as string, 10) : 10;

  // Calculate total pages
  const totalPages = Math.ceil(totalCount / limit);

  // Return the result along with pagination details
  return {
    data: serviceResult,
    total: totalCount,
    currentPage: page,
    totalPages,
    pageSize: limit,
  };
};

const getProjectById = async (id: string) => {
  const service = await ProjectModel.findById(id);

  // checking is service is available
  if (!service) {
    throw new AppError(404, 'Project not found!');
  }
  return service;
};

const updateProjectById = async (id: string, payLoad: Partial<TProject>) => {
  const service = await ProjectModel.findByIdAndUpdate(id, payLoad, {
    new: true,
  });

  // checking is service is available
  if (!service) {
    throw new AppError(404, 'Project not found!');
  }
  return service;
};

const deleteProjectById = async (id: string) => {
  const service = await ProjectModel.findById(id);

  // checking is service is available
  if (!service) {
    throw new AppError(404, 'Project not found!');
  }

  const result = await ProjectModel.findByIdAndDelete(id);

  return result;
};

export const projectService = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProjectById,
  deleteProjectById,
  getAllProjectsAdmin,
};
