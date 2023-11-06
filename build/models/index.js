"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieModel = void 0;
var movie_model_1 = require("./movie.model");
Object.defineProperty(exports, "MovieModel", { enumerable: true, get: function () { return __importDefault(movie_model_1).default; } });
const config_1 = __importDefault(require("../config"));
// Synchronize the model with the database
config_1.default
    .sync() // You can pass other options as needed
    .then(() => {
    console.log("Database synchronized successfully");
    // Start your Express server or perform other setup tasks
})
    .catch((error) => {
    console.error("Error synchronizing the database:", error);
});
