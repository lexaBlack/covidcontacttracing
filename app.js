const express =require('express');
const bodyParser = require('body-parser');
const app = express();
const Sequelize = require('sequelize');
const multer =require('multer');
const path = require('path');
var cors = require('cors');
const sequelize = require('./utils/database');
const TraceRoutes = require('./routes/traceRoutes');
const TraceModel =require('./models/test');

var corsOptions = {
  origin: '*',//remember to change here to add your own domain @jahwin
  optionsSuccessStatus: 200 
}
var portnumber = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin','*');
   res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST'
    );
    
   res.setHeader('Access-Control-Allow-Headers','X-Requested-With,Content-Type,Authorization');
    next();
});

app.use(TraceRoutes);


app.use((error,req,res,next)=>{
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({status:status,message:message,data:data})
});
app.listen(process.env.PORT || portnumber, function() {
  });

  sequelize.sync().then(result => {
    
    console.log(result);
  })
.catch(err =>{console.log(err);});

