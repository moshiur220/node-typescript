"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // Import the UserController
const test_middleware_1 = __importDefault(require("../../middlewares/test.middleware")); // Import the test middleware
const controllers_1 = require("../../controllers");
const router = express_1.default.Router();
// router.get("/", (req: Request, res: Response) => {
//   res.status(HttpStatus.OK).json("Hello this is from user router");
// });
router.get("/", test_middleware_1.default, controllers_1.userController.getAllUsers);
router.get("/all", controllers_1.userController.allUsers);
exports.default = router;
