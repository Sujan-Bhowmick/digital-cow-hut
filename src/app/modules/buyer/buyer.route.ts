import express from "express"
import { BuyerController } from "./buyer.controller";
const router = express.Router();

router.post('/create-buyer', BuyerController.createBuyer)

export const BuyerRoutes = router;