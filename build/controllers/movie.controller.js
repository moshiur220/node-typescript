"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const catchAsync_1 = __importDefault(require("../libs/catchAsync"));
const logger_1 = __importDefault(require("../libs/logger"));
const movie_model_1 = require("../models/movie.model"); // Assuming 'movie' is the correct model name
class MovieController {
}
_a = MovieController;
MovieController.allMovie = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allMovies = yield movie_model_1.MovieModel.find();
        if (allMovies.length === 0) {
            res.status(http_status_codes_1.default.NOT_FOUND).json({
                success: false,
                message: "No movies found",
            });
            return;
        }
        res.status(http_status_codes_1.default.OK).json({
            success: true,
            message: "Movies fetched successfully",
            data: allMovies,
        });
    }
    catch (error) {
        logger_1.default.error("Error fetching movies:", error);
        res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Internal server error",
        });
    }
}));
MovieController.createMovie = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Assuming you have the necessary request data in the req.body
        const { title, description, releaseYear, length, rating, imageUrl, } = req.body;
        // Create a new movie document
        const newMovie = new movie_model_1.MovieModel({
            title,
            description,
            releaseYear,
            length,
            rating,
            imageUrl,
        });
        // Save the movie to the database
        yield newMovie.save();
        res.status(http_status_codes_1.default.CREATED).json({
            success: true,
            message: "Movie created successfully",
            data: newMovie,
        });
    }
    catch (error) {
        logger_1.default.error("Error creating movie:", error);
        res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Internal server error",
        });
    }
}));
exports.default = MovieController;
