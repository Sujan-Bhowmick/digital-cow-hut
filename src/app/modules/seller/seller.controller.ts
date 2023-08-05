import { Request, Response } from 'express';
import { SellerService } from './seller.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';

const createSeller = catchAsync(
  async (req: Request, res: Response) => {
    const { seller } = req.body;
    const result = await SellerService.createSeller(seller);

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

export const SellerController = {
  createSeller,
};
