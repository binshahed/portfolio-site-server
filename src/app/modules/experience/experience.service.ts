import AppError from '../../errors/AppError';
import { TExperience } from './experience.interface';
import { ExperienceModel } from './experience.model';

import { QueryBuilder } from '../../builder/QueryBuilder';

const createExperience = async (payLoad: TExperience) => {
  const service = await ExperienceModel.create(payLoad);
  if (!service) {
    throw new AppError(400, 'Experience is not created');
  }
  return service;
};

const getAllExperiences = async (query: Record<string, unknown>) => {
  const services = new QueryBuilder(
    ExperienceModel.find({ isDeleted: { $ne: true } }),
    query,
  )
    .search(['companyName', 'designation'])
    .filter([
      'searchTerm',
      'sort',
      'order',
      'limit',
      'page',
      'fields',
      'dateRange',
    ])
    .sort()
    .paginate()
    .fields();
  const serviceResult = await services.modelQuery.exec();

  return serviceResult;
};

const getExperienceById = async (id: string) => {
  const service = await ExperienceModel.findById(id);

  // checking if the experience is available
  if (!service) {
    throw new AppError(404, 'Experience not found!');
  }
  return service;
};

const updateExperienceById = async (id: string, payLoad: Partial<TExperience>) => {
  const service = await ExperienceModel.findByIdAndUpdate(id, payLoad, {
    new: true,
  });

  // checking if the experience is available
  if (!service) {
    throw new AppError(404, 'Experience not found!');
  }
  return service;
};

const deleteExperienceById = async (id: string) => {
  const service = await ExperienceModel.findById(id);

  // checking if the experience is available
  if (!service) {
    throw new AppError(404, 'Experience not found!');
  }

  const result = await ExperienceModel.findByIdAndUpdate(id, { isDeleted: true });

  return result;
};

export const experienceService = {
  createExperience,
  deleteExperienceById,
  updateExperienceById,
  getExperienceById,
  getAllExperiences,
};
