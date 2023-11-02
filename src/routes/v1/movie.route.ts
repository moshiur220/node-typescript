import express from "express"; // Import the UserController
import testMiddleware from "../../middlewares/test.middleware"; // Import the test middleware
import validate from "../../middlewares/validate"; // Import the test middleware
import { movieController } from "../../controllers";
import movieValidation from "../../validations/movie.validation";
const router = express.Router();

// router
//   .route("/")
//   .get(validate(movieValidation.getMovieQuery), MovieController.getMovieQuery)
//   .post(validate(movieValidation.createMovie), MovieController.createMovie);

router.get("/", testMiddleware, movieController.allMovie);
// router.post("/", testMiddleware, movieController.createMovie);
router.post(
  "/",
  validate(movieValidation.createMovie),
  movieController.createMovie
);

export default router;
