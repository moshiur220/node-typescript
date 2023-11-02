import mongoose, { Document, Model } from "mongoose";

// Create a schema for the "movie" entity
const movieSchema = new mongoose.Schema({
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

// Create the "movie" model
export interface MovieDocument extends Document {
  title: string;
  description: string;
  releaseYear: string;
  length: number;
  rating: number;
  imageUrl: string;
}

export const MovieModel: Model<MovieDocument> = mongoose.model<MovieDocument>(
  "Movie",
  movieSchema
);

export default MovieModel;
