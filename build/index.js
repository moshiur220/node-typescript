"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./config/database");
const hello_1 = __importDefault(require("./routes/hello"));
const v1_1 = __importDefault(require("./routes/v1"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, morgan_1.default)("dev"));
app.use((0, cors_1.default)());
// Routes
app.get("/", (req, res) => {
    res.send({ message: "Awesome it works 🐻" });
});
app.use("/hello", hello_1.default);
app.use("/v1", v1_1.default);
// Error Handling
app.use((req, res, next) => {
    next(http_errors_1.default.NotFound());
});
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        status: err.status || 500,
        message: err.message,
    });
});
// Initialize the database
(0, database_1.initializeDatabase)().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 @ http://localhost:${PORT}`);
    });
});
