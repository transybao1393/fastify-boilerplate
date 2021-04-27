const { Sequelize } = require('sequelize');
const { development } = require('./config/config');

const sequelize = new Sequelize(development.database, development.username, development.password, {
    host: development.host,
    dialect: development.dialect,
    port: development.port,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

sequelize.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Class = require("../application/class/class.model")(sequelize, Sequelize);
db.User = require("../application/user/user.model")(sequelize, Sequelize);

module.exports = db;