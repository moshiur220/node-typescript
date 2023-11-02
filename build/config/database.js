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
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
function initializeDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dbUrl = process.env.MONGODB_URL || "";
            const dbName = process.env.MONGODB_NAME || "mydatabase";
            if (!dbUrl) {
                throw new Error("MONGODB_URL environment variable is not defined.");
            }
            yield mongoose_1.default.connect(dbUrl || "", {
                dbName: dbName,
            });
            console.log("Database connection successfully");
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.initializeDatabase = initializeDatabase;
