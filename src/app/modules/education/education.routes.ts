import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';

import auth from '../../middlewares/auth';
import { EducationValidation } from './education.validation';
import { educationController } from './education.controller';

const router = Router();

router
  .route('/')
  .get(educationController.getAllEducation)
  .post(
    auth('admin'),
    validateRequest(EducationValidation.createEducationValidation),
    educationController.createEducation,
  );

router
  .route('/:id')
  .get(educationController.getEducationById)
  .patch(
    auth('admin'),
    validateRequest(EducationValidation.updateEducationValidation),
    educationController.updateEducationById,
  )
  .delete(auth('admin'), educationController.deleteEducationById);

export const EducationRouter = router;
