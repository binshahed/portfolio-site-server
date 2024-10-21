import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';



import auth from '../../middlewares/auth';
import { ProjectValidation } from './projects.validation';
import { projectController } from './projects.controller';

const router = Router();

router
  .route('/')
  .post(
    auth('admin'),
    validateRequest(ProjectValidation.createProjectValidation),
    projectController.createProject,
  )
  .get(projectController.getAllProjects);

router
  .route('/admin')
  .get(auth('admin'), projectController.getAllProjectsAdmin);

router
  .route('/:id')
  .get(projectController.getProjectById)
  .patch(
    auth('admin'),
    validateRequest(ProjectValidation.updateProjectValidation),
    projectController.updateProjectById,
  )
  .delete(auth('admin'), projectController.deleteProjectById);

export const ProjectRouter = router;
