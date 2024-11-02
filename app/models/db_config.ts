import {Dialect, Sequelize} from 'sequelize';
const Config = require("../config/db_config");

const sequelize = new Sequelize(Config.database, Config.username, Config.password, {
    logging: false,
    host: Config.host,
    dialect: Config.dialect as Dialect,
    timezone: "+05:30"
})

const startDbServer = async () => {
    console.log("DB Server Staring...")
    try {
        await sequelize.authenticate();
        console.log("DB Server Started...")
    }catch(err) {
        console.log("Error While Starting Server...");
        throw err;
    }
}

export {sequelize, Sequelize, startDbServer};