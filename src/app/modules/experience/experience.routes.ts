import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';

import auth from '../../middlewares/auth';
import { ExperienceValidation } from './experience.validation';
import { experienceController } from './experience.controller';

const router = Router();

router
  .route('/')
  .get(experienceController.getAllExperience)
  .post(
    auth('admin'),
    validateRequest(ExperienceValidation.createExperienceValidation),
    experienceController.createExperience,
  );

router
  .route('/:id')
  .get(experienceController.getExperienceById)
  .patch(
    auth('admin'),
    validateRequest(ExperienceValidation.updateExperienceValidation),
    experienceController.updateExperienceById,
  )
  .delete(auth('admin'), experienceController.deleteExperienceById);

export const ExperienceRouter = router;
