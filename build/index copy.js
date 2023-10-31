"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const hello_1 = __importDefault(require("./routes/hello")); // Import the route file
const app = (0, express_1.default)();
const port = 3000;
app.use("/hello", hello_1.default); // Use the route
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
