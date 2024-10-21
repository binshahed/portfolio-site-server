import AppError from '../../errors/AppError';
import { TPersonalInfo } from './personalInfo.interface';
import { PersonalInfoModel } from './personalInfo.model';

const createPersonalInfo = async (payLoad: TPersonalInfo) => {
  const service = await PersonalInfoModel.create(payLoad);
  if (!service) {
    throw new AppError(400, 'Skill is not created');
  }
  return service;
};

const upsertPersonalInfo = async (payload: TPersonalInfo) => {
  const existingInfo = await PersonalInfoModel.findOne();

  if (existingInfo) {
    return await PersonalInfoModel.findByIdAndUpdate(
      existingInfo._id,
      payload,
      {
        new: true,
      },
    );
  } else {
    return await PersonalInfoModel.create(payload);
  }
};

// Get personal information
const getPersonalInfo = async () => {
  const info = await PersonalInfoModel.findOne();

  // Checking if personal information is available
  if (!info) {
    throw new AppError(404, 'Personal information not found!');
  }
  return info;
};

// Update personal information (if needed, you can use upsert for this too)
const updatePersonalInfoById = async (payload: Partial<TPersonalInfo>) => {
  const existingInfo = await PersonalInfoModel.findOne();

  if (!existingInfo) {
    throw new AppError(404, 'Personal information not found!');
  }

  return await PersonalInfoModel.findByIdAndUpdate(existingInfo._id, payload, {
    new: true,
  });
};

export const personalInfoService = {
  createPersonalInfo,
  upsertPersonalInfo,
  getPersonalInfo,
  updatePersonalInfoById,
};
