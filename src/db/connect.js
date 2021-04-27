const { Sequelize } = require('sequelize');

function connection() {
    try {
        return new Sequelize('database', 'username', 'password', {
            host: 'localhost',
            dialect: 'postgres',
            pool: {
              max: 5,
              min: 0,
              idle: 10000
            },
        });
    } catch(error) {
        console.log("Connect db fail");
    }
}

module.exports = connection();