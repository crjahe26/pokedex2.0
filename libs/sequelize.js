const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('./../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;


const sequelize  = new Sequelize(URI, {
    dialect: 'postgres',
    logging: (msg) => { console.log ('Logger: ', msg);}
});

setupModels(sequelize);

sequelize.sync(); // Sincroniza los modelos y crea las estructuras

module.exports = sequelize;