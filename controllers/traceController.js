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
        res.status(201).json({status:'success',message:'All Data',data:[{result}]});

    })

};