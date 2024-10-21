import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { PersonalInfoValidation } from './personalInfo.validation'; // Update this import to your validation file
import { personalInfoController } from './personalInfo.controller'; // Update this import to your controller file

const router = Router();

router
  .route('/')
  .get(personalInfoController.getPersonalInfo) // Adjusted to get personal info
  .post(
    auth('admin'),
    validateRequest(PersonalInfoValidation.createPersonalInfoValidation),
    personalInfoController.createPersonalInfo, // Adjusted to create personal info
  );

router
  .route('/:id')
  .patch(
    auth('admin'),
    validateRequest(PersonalInfoValidation.updatePersonalInfoValidation),
    personalInfoController.updatePersonalInfoById, // Adjusted to update personal info
  );

export const PersonalInfoRouter = router;
