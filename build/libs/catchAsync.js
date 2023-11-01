"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Wraps an asynchronous function to handle errors using promises.
 * @param fn - An asynchronous function that returns a Promise.
 */
const catchAsync = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};
exports.default = catchAsync;
