"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config"));
class Movie extends sequelize_1.Model {
}
Movie.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
    },
    releaseYear: {
        type: sequelize_1.DataTypes.STRING,
    },
    length: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    rating: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    imageUrl: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    sequelize: config_1.default,
    tableName: "movies",
});
exports.default = Movie;
