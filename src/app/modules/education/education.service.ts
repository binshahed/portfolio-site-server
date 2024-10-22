import AppError from '../../errors/AppError';
import { TEducation } from './education.interface';
import { EducationModel } from './education.model';

const createEducation = async (payLoad: TEducation) => {
  const education = await EducationModel.create(payLoad);
  if (!education) {
    throw new AppError(400, 'Education is not created');
  }
  return education;
};

const getAllEducations = async () => {
  const educations = await EducationModel.find().sort({ createdAt: -1 });

  return educations;
};

const getEducationById = async (id: string) => {
  const education = await EducationModel.findById(id);

  // checking is education is available
  if (!education) {
    throw new AppError(404, 'Education not found!');
  }
  return education;
};

const updateEducationById = async (
  id: string,
  payLoad: Partial<TEducation>,
) => {
  const education = await EducationModel.findByIdAndUpdate(id, payLoad, {
    new: true,
  });

  // checking is education is available
  if (!education) {
    throw new AppError(404, 'Education not found!');
  }
  return education;
};

const deleteEducationById = async (id: string) => {
  const education = await EducationModel.findById(id);

  // checking is education is available
  if (!education) {
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
