import AppError from '../../errors/AppError';
import { TEducation } from './education.interface';
import { EducationModel } from './education.model';

const createEducation = async (payLoad: TEducation) => {
  const service = await EducationModel.create(payLoad);
  if (!service) {
    throw new AppError(400, 'Education is not created');
  }
  return service;
};

const getAllEducations = async () => {
  const services = await EducationModel.find().sort({ createdAt: -1 });

  return services;
};

const getEducationById = async (id: string) => {
  const service = await EducationModel.findById(id);

  // checking is service is available
  if (!service) {
    throw new AppError(404, 'Education not found!');
  }
  return service;
};

const updateEducationById = async (
  id: string,
  payLoad: Partial<TEducation>,
) => {
  const service = await EducationModel.findByIdAndUpdate(id, payLoad, {
    new: true,
  });

  // checking is service is available
  if (!service) {
    throw new AppError(404, 'Education not found!');
  }
  return service;
};

const deleteEducationById = async (id: string) => {
  const service = await EducationModel.findById(id);

  // checking is service is available
  if (!service) {
    throw new AppError(404, 'Education not found!');
  }

  const result = await EducationModel.findByIdAndDelete(id);

  return result;
};

export const educationService = {
  createEducation,
  deleteEducationById,
  updateEducationById,
  getEducationById,
  getAllEducations,
};
