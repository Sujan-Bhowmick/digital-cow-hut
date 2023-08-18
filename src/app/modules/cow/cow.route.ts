import express from 'express';
import { CowController } from './cow.controller';
import { cowValidation } from './cow.validation';
import validateRequest from '../../middleware/validateRequest';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';

const router = express.Router();

router.post(
  '/create-cow',
  validateRequest(cowValidation.createCowZodSchema), 
  auth(ENUM_USER_ROLE.SELLER),
  CowController.createCow,
);

router.get('/:id',auth(ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.BUYER), CowController.getSingleCow);

router.delete('/:id',auth(ENUM_USER_ROLE.SELLER), CowController.deleteCow);

router.patch('/:id',auth(ENUM_USER_ROLE.SELLER), CowController.updateCow)

router.get('/', auth(ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.BUYER),CowController.getAllCows);

export const CowRoutes = router;
