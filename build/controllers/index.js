"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = exports.movieController = void 0;
var movie_controller_1 = require("./movie.controller");
Object.defineProperty(exports, "movieController", { enumerable: true, get: function () { return __importDefault(movie_controller_1).default; } });
var user_controller_1 = require("./user.controller");
Object.defineProperty(exports, "userController", { enumerable: true, get: function () { return __importDefault(user_controller_1).default; } });
