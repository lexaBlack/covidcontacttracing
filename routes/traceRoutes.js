const express = require('express');
const TraceController = require('../controllers/traceController');
const router =express.Router();


router.post('/send',TraceController.DriverReg);



module.exports=router;