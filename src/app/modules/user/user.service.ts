
import AppError from '../../errors/AppError';
import { UserModel } from './user.model';

const getAllUsers = async () => {
  // fetch users from database
  const users = await UserModel.find();

  if (users.length === 0) {
    throw new AppError(404, 'User Not Found');
  }

  return users;
};

const updateUserStatus = async (id: string, payload: { role: string }) => {
  const user = await UserModel.findById(id);
  if (!user) {
    throw new AppError(404, 'Slot not found!');
  }

  const result = UserModel.findByIdAndUpdate(
    id,
    { role: payload.role },
    {
      new: true,
    },
  );
  return result;
};

const updateProfile = async (id: string, payload: { role: string }) => {
  const user = await UserModel.findById(id);
  if (!user) {
    throw new AppError(404, 'User not found!');
  }
  const result = UserModel.findByIdAndUpdate(id, payload, { new: true });

  return result;
};

export const userService = {
  getAllUsers,
  updateUserStatus,
  updateProfile,
};
