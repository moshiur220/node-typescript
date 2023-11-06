"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    dialect: "postgres",
    host: "localhost",
    port: 5432,
    username: "mos",
    password: "mos",
    database: "mydb",
});
sequelize
    .authenticate()
    .then(() => {
    console.log("Connection to the database has been established successfully.");
})
    .catch((err) => {
    console.error("Unable to connect to the database:", err);
});
exports.default = sequelize;
