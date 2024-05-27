import { Sequelize } from "sequelize";

const db = new Sequelize('nodeUsers', 'sa', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3308
});

export default db;