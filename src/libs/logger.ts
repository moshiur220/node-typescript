import { createLogger, format, transports } from "winston";

const logLevel = process.env.NODE_ENV === "development" ? "debug" : "info";

// Define the custom colors
const customColors = {
  error: "red",
  debug: "blue",
  warn: "yellow",
  data: "grey",
  info: "green",
  verbose: "cyan",
  silly: "magenta",
};

// Add the custom colors to the format
format.colorize({ all: true, colors: customColors });

const logger = createLogger({
  level: logLevel,
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.colorize(), // Apply colors
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level}]: ${message}`;
    })
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "error.log", level: "error" }),
    new transports.File({ filename: "combined.log" }),
  ],
});

export default logger;
