import { User } from './user.model';
import { IUser } from './user.interface';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { generateAdminId, generateBuyerId, generateSellerId } from './user.utils';
import { ISeller } from '../seller/seller.interface';
import { Seller } from '../seller/seller.model';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import { IBuyer } from '../buyer/buyer.interface';
import { IAdmin } from '../admin/admin.interface';
import { Admin } from '../admin/admin.model';
import { Buyer } from '../buyer/buyer.model';
import bcrypt from 'bcrypt';

const createSeller = async (
  seller: ISeller,
  user: IUser,
): Promise<IUser | null> => {
  // default password
  if (!user.password) {
    user.password = config.default_seller_pass as string;
  }
  // hash password
  user.password = await bcrypt.hash(user.password,  Number(config.bcrypt_salt_rounds))

  // set role
  user.role = 'seller';

  //  auto generated id
  let newUserAllData = null;
  const session = await mongoose.startSession();
  
  try {
    session.startTransaction();
    const id = await generateSellerId();
    user.id = id;
    seller.id = id;

    const newSeller = await Seller.create([seller], { session});

    if (!newSeller.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create seller');
    }

    // set student ---> _id into user.student
    user.seller = newSeller[0]._id;

    const newUser = await User.create([user], { session });

    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create User');
    }
    newUserAllData = newUser[0];

    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }
  if (newUserAllData) {
    newUserAllData = await User.findOne({ id: newUserAllData.id }).populate(
      'seller',
    );
  }
  return newUserAllData;
};


const createBuyer = async (
  buyer: IBuyer,
  user: IUser,
): Promise<IUser | null> => {
  // default password
  if (!user.password) {
    user.password = config.default_buyer_pass as string;
  }
  // set role
  user.role = 'buyer';

  //  auto generated id
  let newUserAllData = null;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const id = await generateBuyerId();
    user.id = id;
    buyer.id = id;

    const newBuyer = await Buyer.create([buyer], { session });

    if (!newBuyer.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create buyer');
    }

    // set student ---> _id into user.student
    user.buyer = newBuyer[0]._id;

    const newUser = await User.create([user], { session });

    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create User');
    }
    newUserAllData = newUser[0];

    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }
  if (newUserAllData) {
    newUserAllData = await User.findOne({ id: newUserAllData.id }).populate(
      'buyer',
    );
  }
  return newUserAllData;
};
const createAdmin = async (
  admin: IAdmin,
  user: IUser,
): Promise<IUser | null> => {
  // default password
  if (!user.password) {
    user.password = config.default_buyer_pass as string;
  }
  // set role
  user.role = 'admin';

  //  auto generated id
  let newUserAllData = null;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const id = await generateAdminId();
    user.id = id;
    admin.id = id;

    const newAdmin = await Admin.create([admin], { session });

    if (!newAdmin.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create buyer');
    }

    // set student ---> _id into user.student
    user.admin = newAdmin[0]._id;

    const newUser = await User.create([user], { session });

    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create User');
    }
    newUserAllData = newUser[0];

    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }
  if (newUserAllData) {
    newUserAllData = await User.findOne({ id: newUserAllData.id }).populate(
      'admin',
    );
  }
  return newUserAllData;
};

export const UserService = {
  createBuyer,
  createSeller,
  createAdmin
};
