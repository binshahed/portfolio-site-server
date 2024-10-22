import AppError from '../../errors/AppError';
import { TSkill } from './skills.interface';
import { SkillModel } from './skills.model';

import { QueryBuilder } from '../../builder/QueryBuilder';

const createSkill = async (payLoad: TSkill) => {
  const service = await SkillModel.create(payLoad);
  if (!service) {
    throw new AppError(400, 'Skill is not created');
  }
  return service;
};

const getAllSkills = async (query: Record<string, unknown>) => {
  const services = new QueryBuilder(
    SkillModel.find({ isDeleted: { $ne: true } }),
    query,
  )
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
  const serviceResult = await services.modelQuery.exec();

  return serviceResult;
};


const getSkillById = async (id: string) => {
  const service = await SkillModel.findById(id);

  // checking is service is available
  if (!service) {
    throw new AppError(404, 'Skill not found!');
  }
  return service;
};

const updateSkillById = async (id: string, payLoad: Partial<TSkill>) => {
  const service = await SkillModel.findByIdAndUpdate(id, payLoad, {
    new: true,
  });

  // checking is service is available
  if (!service) {
    throw new AppError(404, 'Skill not found!');
  }
  return service;
};

const deleteSkillById = async (id: string) => {
  const service = await SkillModel.findById(id);

  // checking is service is available
  if (!service) {
    throw new AppError(404, 'Skill not found!');
  }

  const result = await SkillModel.findByIdAndDelete(id);

  return result;
};

export const skillService = {
  createSkill,
  deleteSkillById,
  updateSkillById,
  getSkillById,
  getAllSkills,
};
