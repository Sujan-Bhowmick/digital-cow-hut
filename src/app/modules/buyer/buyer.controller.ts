import {  Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { BuyerService } from './buyer.service';

const createBuyer = catchAsync(
  async (req: Request, res: Response,) => {
    const { buyer } = req.body;
    const result = await BuyerService.createBuyer(buyer);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Seller created successfully',
      data: result,
    });
    // res.status(200).json({
    //   success: true,
    //   message: 'Data create successfully',
    //   data: result,
    // });
  },
);

export const BuyerController = {
  createBuyer,
};
