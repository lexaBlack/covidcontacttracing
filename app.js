var express =require('express');
var bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const path = require('path');
const traceRoute = require('./routes/traceRoutes')
const multer =require('multer');
const sequelize = require('./utils/database');



const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'files');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + '-' + file.originalname);
  }
});
const fileFilter = (req, file, cb) => {
  // if (file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
     cb(null, true);
   //} else {
    // cb(null, false);
   //}
 };
var upload = multer({ storage: fileStorage, fileFilter: fileFilter });
var app = express();

app.use('/files', express.static(path.join(__dirname, 'files')));
app.set('view engine','ejs');
app.set('views','views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));
var portnumber = process.env.PORT || 8080;


app.use((error,req,res,next)=>{
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    console.log(data)
});




app.use((error,req,res,next)=>{
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  console.log("err",message,"Stast",status);
});

app.use(traceRoute);


app.use((req,res,next)=>{
  res.status(404).send("<h1>Page Have Not Yet been Implemented to lack of information</h1>");
});


sequelize.sync({force:false}).then(result => {
  //,'192.168.0.9'
app.listen(process.env.PORT || portnumber, function() {
});
  console.log(result);
})
