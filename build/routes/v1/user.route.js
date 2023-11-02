"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("../../controllers/user.controller")); // Import the UserController
const test_middleware_1 = __importDefault(require("../../middlewares/test.middleware")); // Import the test middleware
const router = express_1.default.Router();
// router.get("/", (req: Request, res: Response) => {
//   res.status(HttpStatus.OK).json("Hello this is from user router");
// });
router.get("/", test_middleware_1.default, user_controller_1.default.getAllUsers);
router.get("/all", user_controller_1.default.allUsers);
exports.default = router;
