import express, { Request, Response } from "express";
import HttpStatus from "http-status-codes";
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.status(HttpStatus.OK).json("Hello from the route file!");
});

export default router;
