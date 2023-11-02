import { Request, Response } from "express";
import HttpStatus from "http-status-codes";
import catchAsync from "../libs/catchAsync";
import logger from "../libs/logger";
import { MovieModel } from "../models/movie.model"; // Assuming 'movie' is the correct model name

interface CreateMovieRequestBody {
  title: string;
  description: string;
  releaseYear: string;
  length: number;
  rating: number;
  imageUrl: string;
}

class MovieController {
  static allMovie = catchAsync(async (req: Request, res: Response) => {
    try {
      const allMovies = await MovieModel.find();

      if (allMovies.length === 0) {
        res.status(HttpStatus.NOT_FOUND).json({
          success: false,
          message: "No movies found",
        });
        return;
      }

      res.status(HttpStatus.OK).json({
        success: true,
        message: "Movies fetched successfully",
        data: allMovies,
      });
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

      // Create a new movie document
      const newMovie = new MovieModel({
        title,
        description,
        releaseYear,
        length,
        rating,
        imageUrl,
      });

      // Save the movie to the database
      await newMovie.save();

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
