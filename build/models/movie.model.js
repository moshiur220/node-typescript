"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Create a schema for the "movie" entity
const movieSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    releaseYear: {
        type: String,
    },
    length: {
        type: Number,
    },
    rating: {
        type: Number,
    },
    imageUrl: {
        type: String,
    },
});
exports.MovieModel = mongoose_1.default.model("Movie", movieSchema);
exports.default = exports.MovieModel;
