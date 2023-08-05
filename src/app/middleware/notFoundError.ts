import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

const notFoundError = (req:Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not Found",
    errorMessage: [{
      path: req.originalUrl,
      message: "API Not Found"
    }]
  }),
  next()
}

export default notFoundError