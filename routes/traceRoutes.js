const express = require('express');
const TraceController = require('../controllers/traceController');
const router =express.Router();


router.post('/send',TraceController.register);
router.get('/view',TraceController.viewalldata);



module.exports=router;