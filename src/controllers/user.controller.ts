import { Request, Response } from "express";
import HttpStatus from "http-status-codes";
import catchAsync from "../libs/catchAsync";
import logger from "../libs/logger";

class UserController {
  static getAllUsers(req: Request, res: Response): void {
    try {
      // Simulate fetching users (replace with your actual logic)
      const users = [
        { id: 1, name: "User 1" },
        { id: 2, name: "User 2" },
      ];

      res.status(HttpStatus.OK).json({
        success: true,
        message: "Users fetched successfully",
        data: users,
      });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
  static allUsers = catchAsync(async (req: Request, res: Response) => {
    try {
      // Simulate fetching users (replace with your actual logic)
      const users = [
        { id: 1, name: "User 1" },
        { id: 2, name: "User 2" },
      ];
      logger.error("error fetching users");
      logger.info(JSON.stringify(users));
      res.status(HttpStatus.OK).json({
        success: true,
        message: "All Users fetched successfully",
        data: users,
      });
    } catch (error) {
      console.log(error);

      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: "Internal server error",
      });
    }
  });
}

export default UserController;
