import {RequestHandler} from "express";
import { UserService } from "./user.service";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";


const createSeller: RequestHandler = catchAsync(async(req, res) => {

    const {seller,...userData} = req.body
    const result = await UserService.createSeller(seller, userData);

    sendResponse(res,{
      statusCode: httpStatus.OK,
      success: true,
      message: "Seller created Successfully",
      data: result
     })
 
})

const createBuyer: RequestHandler = catchAsync(async(req, res) => {

    const {buyer,...userData} = req.body
    const result = await UserService.createBuyer(buyer, userData);

    sendResponse(res,{
      statusCode: httpStatus.OK,
      success: true,
      message: "Buyer created Successfully",
      data: result
     })
 
})

const createAdmin: RequestHandler = catchAsync(async(req, res) => {
   
    const {admin,...userData} = req.body
    const result = await UserService.createAdmin(admin, userData);

    sendResponse(res,{
      statusCode: httpStatus.OK,
      success: true,
      message: "Admin created Successfully",
      data: result
     })
 
})

 export const UserController = {
  createSeller,
  createBuyer,
  createAdmin
 }