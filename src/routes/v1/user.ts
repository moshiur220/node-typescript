import express, { Request, Response } from "express";
import HttpStatus from "http-status-codes";
import UserController from "../../controllers/user.controller"; // Import the UserController
import testMiddleware from "../../middlewares/test.middleware"; // Import the test middleware
const router = express.Router();

// router.get("/", (req: Request, res: Response) => {
//   res.status(HttpStatus.OK).json("Hello this is from user router");
// });
router.get("/", testMiddleware, UserController.getAllUsers);
router.get("/all", UserController.allUsers);

export default router;
