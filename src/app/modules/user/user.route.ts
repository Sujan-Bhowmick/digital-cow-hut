import express from "express";
import { UserController } from "./user.controller";
import { UserValidation } from "./user.validation";
import validateRequest from "../../middleware/validateRequest";

const router = express.Router();

router.post('/create-seller', 
validateRequest(UserValidation.createSellerZodSchema),
 UserController.createSeller);

router.post('/create-buyer', 
validateRequest(UserValidation.createBuyerZodSchema),
 UserController.createBuyer);

export const UserRoutes = router