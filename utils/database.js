const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://zluetzeylorlbc:b1f46b5080a07048feb829c64411f80486db220d93f5cbe3641ee8fd3b947d1e@ec2-35-168-54-239.compute-1.amazonaws.com:5432/dnp3ad1alsmk6', {
    dialectOptions: {
        ssl: true
    }
});

module.exports = sequelize;