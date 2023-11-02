import express from "express"; // Import the UserController
import testMiddleware from "../../middlewares/test.middleware"; // Import the test middleware
import { userController } from "../../controllers";
const router = express.Router();

// router.get("/", (req: Request, res: Response) => {
//   res.status(HttpStatus.OK).json("Hello this is from user router");
// });
router.get("/", testMiddleware, userController.getAllUsers);
router.get("/all", userController.allUsers);

export default router;
