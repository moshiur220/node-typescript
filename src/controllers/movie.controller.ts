import { Request, Response } from "express";
import HttpStatus from "http-status-codes";
import catchAsync from "../libs/catchAsync";
import pick from "../libs/pick";
import logger from "../libs/logger";
import { MovieModel } from "../models";

interface CreateMovieRequestBody {
  title: string;
  description: string;
  releaseYear: string;
  length: number;
  rating: number;
  imageUrl: string;
}

interface GetMoviesRequest {
  page?: number;
  limit?: number;
}
class MovieController {
  static allMovies = catchAsync(async (req: Request, res: Response) => {
    const filter = pick(req.query, [
      "title",
      "description",
      "releaseYear",
      "length",
      "rating",
    ]);
    const options = pick(req.query, ["sortBy", "limit", "page"]);
    console.log(options.sortBy.split(","));

    console.log("filter");
    console.log(filter);
    console.log("filter options");
    console.log(options);

    try {
      const { page = 1, limit = 10 } = req.query as GetMoviesRequest;
      const offset = (page - 1) * limit;

      const { count, rows: allMovies } = await MovieModel.findAndCountAll({
        offset,
        limit,
      });

      if (allMovies.length === 0) {
        return res.status(HttpStatus.NOT_FOUND).json({
          success: false,
          message: "No movies found",
        });
      }

      const response = {
        success: true,
        message: "Movies fetched successfully",
        data: allMovies,
        totalResults: count,
        totalPages: Math.ceil(count / limit),
        currentPage: page,
      };

      res.status(HttpStatus.OK).json(response);
    } catch (error) {
      logger.error("Error fetching movies:", error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: "Internal server error",
      });
    }
  });

  static createMovie = catchAsync(async (req: Request, res: Response) => {
    try {
      // Assuming you have the necessary request data in the req.body
      const {
        title,
        description,
        releaseYear,
        length,
        rating,
        imageUrl,
      }: CreateMovieRequestBody = req.body;

      // Create a new movie in the database
      const newMovie = await MovieModel.create({
        title,
        description,
        releaseYear,
        length,
        rating,
        imageUrl,
      });

      res.status(HttpStatus.CREATED).json({
        success: true,
        message: "Movie created successfully",
        data: newMovie,
      });
    } catch (error) {
      logger.error("Error creating movie:", error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: "Internal server error",
      });
    }
  });
}

export default MovieController;
