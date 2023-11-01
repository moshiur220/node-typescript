import { Request, Response, NextFunction } from "express";
/**
 * Wraps an asynchronous function to handle errors using promises.
 * @param fn - An asynchronous function that returns a Promise.
 */
const catchAsync =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };

export default catchAsync;
