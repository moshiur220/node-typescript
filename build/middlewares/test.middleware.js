"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define your test middleware
const testMiddleware = (req, res, next) => {
    // You can perform any checks or actions here
    console.log("Test middleware is active.");
    // You can also pass data to the next middleware
    //   req.customData = "Custom data from test middleware";
    // Call the next middleware or route handler
    next();
};
exports.default = testMiddleware;
