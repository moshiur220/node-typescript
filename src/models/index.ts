export { default as MovieModel } from "./movie.model";
import sequelize from "../config";

// Synchronize the model with the database
sequelize
  .sync() // You can pass other options as needed
  .then(() => {
    console.log("Database synchronized successfully");
    // Start your Express server or perform other setup tasks
  })
  .catch((error: any) => {
    console.error("Error synchronizing the database:", error);
  });
