import mongoose from "mongoose";

export async function initializeDatabase(): Promise<void> {
  try {
    const dbUrl = process.env.MONGODB_URL || "";
    const dbName = process.env.MONGODB_NAME || "mydatabase";

    if (!dbUrl) {
      throw new Error("MONGODB_URL environment variable is not defined.");
    }
    await mongoose.connect(dbUrl || "", {
      dbName: dbName,
    });
    console.log("Database connection successfully");
  } catch (error) {
    console.error(error);
  }
}
