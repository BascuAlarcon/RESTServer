import { Sequelize } from "sequelize";
 
const db = new Sequelize('nodeUsers', 'sa', 'admin', {
    host: 'localhost', 
    dialect: 'mssql',   
    //logging: false
});

export default db;