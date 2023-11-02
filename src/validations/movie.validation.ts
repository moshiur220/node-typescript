import * as Joi from "joi";
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

export default {
  createMovie,
  getMovieQuery,
  getMovieById,
  updateMovie,
  deleteMovie,
};
