import express from 'express';
import { CowController } from './cow.controller';
import { cowValidation } from './cow.validation';
import validateRequest from '../../middleware/validateRequest';

const router = express.Router();

router.post(
  '/create-cow',
  validateRequest(cowValidation.createCowZodSchema),
  CowController.createCow,
);

router.get('/:id', CowController.getSingleCow);

router.delete('/:id', CowController.deleteCow);

router.patch('/:id', CowController.updateCow)

router.get('/', CowController.getAllCows);

export const CowRoutes = router;
