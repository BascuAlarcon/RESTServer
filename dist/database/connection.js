"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('nodeUsers', 'sa', 'admin', {
    host: 'localhost',
    dialect: 'mssql',
    //logging: false
});
exports.default = db;
//# sourceMappingURL=connection.js.map