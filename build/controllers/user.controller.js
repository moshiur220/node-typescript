"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const catchAsync_1 = __importDefault(require("../libs/catchAsync"));
class UserController {
    static getAllUsers(req, res) {
        try {
            // Simulate fetching users (replace with your actual logic)
            const users = [
                { id: 1, name: "User 1" },
                { id: 2, name: "User 2" },
            ];
            res.status(http_status_codes_1.default.OK).json({
                success: true,
                message: "Users fetched successfully",
                data: users,
            });
        }
        catch (error) {
            res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: "Internal server error",
            });
        }
    }
}
_a = UserController;
UserController.allUsers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Simulate fetching users (replace with your actual logic)
        const users = [
            { id: 1, name: "User 1" },
            { id: 2, name: "User 2" },
        ];
        res.status(http_status_codes_1.default.OK).json({
            success: true,
            message: "All Users fetched successfully",
            data: users,
        });
    }
    catch (error) {
        res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Internal server error",
        });
    }
}));
exports.default = UserController;
