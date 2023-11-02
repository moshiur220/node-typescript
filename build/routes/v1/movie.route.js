"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // Import the UserController
const test_middleware_1 = __importDefault(require("../../middlewares/test.middleware")); // Import the test middleware
const validate_1 = __importDefault(require("../../middlewares/validate")); // Import the test middleware
const controllers_1 = require("../../controllers");
const movie_validation_1 = __importDefault(require("../../validations/movie.validation"));
const router = express_1.default.Router();
// router
//   .route("/")
//   .get(validate(movieValidation.getMovieQuery), MovieController.getMovieQuery)
//   .post(validate(movieValidation.createMovie), MovieController.createMovie);
router.get("/", test_middleware_1.default, controllers_1.movieController.allMovie);
// router.post("/", testMiddleware, movieController.createMovie);
router.post("/", (0, validate_1.default)(movie_validation_1.default.createMovie), controllers_1.movieController.createMovie);
exports.default = router;
