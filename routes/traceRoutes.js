const express = require('express');
const TraceController = require('../controllers/traceController');
const router =express.Router();


router.post('/send',TraceController.register);
router.get('/',TraceController.indexview);
router.get('/view',TraceController.viewalldata);
router.get('/wallet',TraceController.wallet);
router.get('/events',TraceController.viewEvents);
router.get('/send/:cardid',TraceController.collectdata);



module.exports=router;