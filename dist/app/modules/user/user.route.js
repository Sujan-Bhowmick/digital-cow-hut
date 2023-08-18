"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const user_validation_1 = require("./user.validation");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const router = express_1.default.Router();
router.post('/create-seller', (0, validateRequest_1.default)(user_validation_1.UserValidation.createSellerZodSchema), user_controller_1.UserController.createSeller);
router.post('/create-buyer', (0, validateRequest_1.default)(user_validation_1.UserValidation.createBuyerZodSchema), user_controller_1.UserController.createBuyer);
exports.UserRoutes = router;
