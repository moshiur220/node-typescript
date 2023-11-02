import express, { Request, Response, NextFunction } from "express";
import createError from "http-errors";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import { initializeDatabase } from "./config/database";
import helloRouter from "./routes/hello";
import v1Router from "./routes/v1";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Awesome it works 🐻" });
});

app.use("/hello", helloRouter);
app.use("/v1", v1Router);

// Error Handling
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError.NotFound());
});

app.use(
  (
    err: createError.HttpError,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    res.status(err.status || 500);
    res.send({
      status: err.status || 500,
      message: err.message,
    });
  }
);

// Initialize the database
initializeDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 @ http://localhost:${PORT}`);
  });
});
