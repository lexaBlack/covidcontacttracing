const TraceModel = require('../models/test');



exports.register = (req,res,next) =>{
const cardid = req.body.cardid;
const temp = "0000";



    TraceModel.build({
        ID:cardid,
        temp:temp

        }).save().then(result =>{res.status(201).json({status:'success',message:'Successfully saved',data:[{result}]});})
        .catch(err =>{console.log(err)});
};

exports.viewalldata=(req,res,next) =>{
    TraceModel.findAll({

    }).then(result=>{
        console.log("------",result)
        res.status(201).json({status:'success',message:'View All Data',data:result});

    })

};
exports.viewEvents=(req,res,next) =>{

    res.render('index')

};
exports.wallet=(req,res,next) =>{

    res.render('wallet')

};
exports.collectdata=(req,res,next) =>{
    const cardidd = req.params.cardid;
    const temp = "20";
    
    TraceModel.build({
        ID:cardidd,
        temp:temp

        }).save().then(result =>{ res.send("Testing");})
        .catch(err =>{console.log(err)});

};

exports.indexview=(req,res,next) =>{
    
res.send("Server is on:");

};