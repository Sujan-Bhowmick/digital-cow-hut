"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/user/user.route");
const seller_route_1 = require("../modules/seller/seller.route");
const buyer_route_1 = require("../modules/buyer/buyer.route");
const cow_route_1 = require("../modules/cow/cow.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/users',
        route: user_route_1.UserRoutes
    },
    {
        path: '/buyers',
        route: buyer_route_1.BuyerRoutes
    },
    {
        path: '/sellers',
        route: seller_route_1.SellerRoutes
    },
    {
        path: '/cows',
        route: cow_route_1.CowRoutes
    }
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
// router.use('/users', UserRoutes)
exports.default = router;
