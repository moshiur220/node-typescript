"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = __importStar(require("joi"));
// import { objectId, password } from "./custom.validation";
const createMovie = {
    body: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        releaseYear: Joi.string().required(),
        length: Joi.number().required(),
        rating: Joi.number().required(),
        imageUrl: Joi.string(),
    }),
};
const getMovieQuery = {
    query: Joi.object().keys({
        title: Joi.string(),
        description: Joi.string(),
        releaseYear: Joi.string(),
        length: Joi.number(),
        rating: Joi.number(),
        sortBy: Joi.string(),
        limit: Joi.number().integer(),
        page: Joi.number().integer(),
    }),
};
const getMovieById = {
    params: Joi.object().keys({
    // id: Joi.string().custom(objectId),
    }),
};
const updateMovie = {
    params: Joi.object().keys({
    // id: Joi.string().custom(objectId).required(),
    }),
    body: Joi.object()
        .keys({
        title: Joi.string(),
        description: Joi.string(),
        releaseYear: Joi.string(),
        length: Joi.number(),
        rating: Joi.number(),
    })
        .min(1),
};
const deleteMovie = {
    params: Joi.object().keys({
    // id: Joi.string().custom(objectId),
    }),
};
exports.default = {
    createMovie,
    getMovieQuery,
    getMovieById,
    updateMovie,
    deleteMovie,
};
