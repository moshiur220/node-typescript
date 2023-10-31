"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.status(http_status_codes_1.default.OK).json("Hello from the route file!");
});
exports.default = router;
