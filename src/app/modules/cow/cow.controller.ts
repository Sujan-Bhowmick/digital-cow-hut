import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { CowService } from './cow.service';
import httpStatus from 'http-status';
import { ICow } from './cow.interface';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { cowFilterableFields } from './cow.constant';

const createCow = catchAsync(
  async (req: Request, res: Response )=> {
    const { ...cow } = req.body;
    const result = await CowService.createCow(cow);

   
    sendResponse<ICow>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Cow created successfully',
      data: result,
    });
  },
);

const getAllCows = catchAsync(
  async (req: Request, res: Response,) => {
    
    const paginationOptions = pick(req.query, paginationFields)
    console.log(paginationOptions)

    const filters = pick(req.query, cowFilterableFields)

    const result = await CowService.getAllCows(paginationOptions, filters);
    
    
     
    sendResponse<ICow[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Cow retrieved successfully',
      meta: result.meta,
      data: result.data,
    });
   
  },
);
const getSingleCow = catchAsync(
  async (req: Request, res: Response,) => {
    const id = req.params.id;
    const result = await CowService.getSingleCow(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Cow retrieved successfully',
      data: result,
    });
  },
);

const updateCow = catchAsync(
  async (req: Request, res: Response,) => {
    const id = req.params.id;
    const updatedData = req.body;
    const result = await CowService.updateCow(id, updatedData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Cow retrieved successfully',
      data: result,
    });
  },
);
const deleteCow = catchAsync(
  async (req: Request, res: Response,) => {
    const id = req.params.id;
    const result = await CowService.deleteCow(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Cow deleted successfully',
      data: result,
    });
  },
);

export const CowController = {
  createCow,
  getAllCows,
  getSingleCow,
  updateCow,
  deleteCow,
};
