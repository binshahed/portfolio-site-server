import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';

import auth from '../../middlewares/auth';
import { SkillValidation } from './skills.validation';
import { skillController } from './skills.controller';

const router = Router();

router
  .route('/')
  .get(skillController.getAllSkill)
  .post(
    auth('admin'),
    validateRequest(SkillValidation.createSkillValidation),
    skillController.createSkill,
  );

router
  .route('/:id')
  .get(skillController.getSkillById)
  .patch(
    auth('admin'),
    validateRequest(SkillValidation.updateSkillValidation),
    skillController.updateSkillById,
  )
  .delete(auth('admin'), skillController.deleteSkillById);

export const SkillRouter = router;
