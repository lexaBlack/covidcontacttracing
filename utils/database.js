const Sequelize = require('sequelize');
require("dotenv").config()
const sequelize = new Sequelize(process.env.DBKEY, {
    dialectOptions: {
        ssl: true
    }
});

module.exports = sequelize;