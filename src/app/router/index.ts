import express from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { SellerRoutes } from '../modules/seller/seller.route';
import { BuyerRoutes } from '../modules/buyer/buyer.route';
import { CowRoutes } from '../modules/cow/cow.route';
import { AdminRoutes } from '../modules/admin/admin.route';
import { AuthRoutes } from '../modules/auth/auth.route';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route : UserRoutes
  },
  {
    path: '/buyers',
    route : BuyerRoutes
  },
  {
    path: '/sellers',
    route : SellerRoutes
  },
  {
    path: '/admin',
    route : AdminRoutes
  },
  {
    path: '/cows',
    route : CowRoutes
  },
  {
    path: '/auth',
    route : AuthRoutes
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route))

// router.use('/users', UserRoutes)
export default router

