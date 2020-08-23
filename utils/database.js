const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://kenzfqdhgfoajd:fdafcf179b9b2b36843a5a454a1e1c78a1a7b2f2d0fcfb0b85a8e766124ff8ea@ec2-54-146-91-153.compute-1.amazonaws.com:5432/dev1e7ki8q4hid', {
    dialectOptions: {
        ssl: true
    }
});

module.exports = sequelize;