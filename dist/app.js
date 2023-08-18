"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const globalErrorHandler_1 = __importDefault(require("./app/middleware/globalErrorHandler"));
const router_1 = __importDefault(require("./app/router"));
const notFoundError_1 = __importDefault(require("./app/middleware/notFoundError"));
app.use((0, cors_1.default)());
//parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Application Routes
// app.use('/api/v1/users/', usersRouter)
app.use('/api/v1/', router_1.default);
// testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   // throw new Error('ore baba error')
//   // next('ore baba error')
// });
// global error handler
app.use(globalErrorHandler_1.default);
app.use(notFoundError_1.default);
// const testId = async () => {
//   const testId = await generateSellerId();
//   console.log(testId);
// };
// testId();
exports.default = app;
