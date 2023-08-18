"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSellerId = exports.findLastSellerId = exports.generateBuyerId = exports.findLastBuyerId = void 0;
const user_model_1 = require("./user.model");
const findLastBuyerId = () => __awaiter(void 0, void 0, void 0, function* () {
    const lastBuyer = yield user_model_1.User.findOne({
        role: 'buyer',
    }, { id: 1, _id: 0 })
        .sort({
        createdAt: -1,
    })
        .lean();
    return (lastBuyer === null || lastBuyer === void 0 ? void 0 : lastBuyer.id) ? lastBuyer.id.substring(2) : undefined;
});
exports.findLastBuyerId = findLastBuyerId;
const generateBuyerId = () => __awaiter(void 0, void 0, void 0, function* () {
    const currnetId = (yield (0, exports.findLastBuyerId)()) || (0).toString().padStart(5, '0');
    // increment by 1
    let incrementedId = (parseInt(currnetId) + 1).toString().padStart(5, '0');
    incrementedId = `B-${incrementedId}`;
    return incrementedId;
});
exports.generateBuyerId = generateBuyerId;
// Seller id
const findLastSellerId = () => __awaiter(void 0, void 0, void 0, function* () {
    const lastSeller = yield user_model_1.User.findOne({
        role: 'seller',
    }, { id: 1, _id: 0 })
        .sort({
        createdAt: -1,
    })
        .lean();
    return (lastSeller === null || lastSeller === void 0 ? void 0 : lastSeller.id) ? lastSeller.id.substring(2) : undefined;
});
exports.findLastSellerId = findLastSellerId;
const generateSellerId = () => __awaiter(void 0, void 0, void 0, function* () {
    const currnetId = (yield (0, exports.findLastSellerId)()) || (0).toString().padStart(5, '0');
    // increment by 1
    let incrementedId = (parseInt(currnetId) + 1).toString().padStart(5, '0');
    incrementedId = `S-${incrementedId}`;
    return incrementedId;
});
exports.generateSellerId = generateSellerId;
