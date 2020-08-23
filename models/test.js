const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
const Tracing = sequelize.define('tracing',{

    TracingId:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
       
    },
    ID:{
        type:Sequelize.STRING,
        allowNull:true

    },
    temp:{
        type:Sequelize.STRING,
        allowNull:true

    },


});

module.exports = Tracing;