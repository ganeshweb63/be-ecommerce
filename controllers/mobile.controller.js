var MobileModel=require('../models/mobile.model');

exports.addMobiles=(req,res)=>{

    var body=req.body;

    var document=new MobileModel(body);
    document.save((err,docs)=>{
        if(err){
            console.log(err.message);
            res.send(err.message);
        }
        else{
            console.log(docs);
            if(docs._id){
                res.send("One mobile product is added successfully");
            }

        }
        
    })

}

exports.listMobile=(req,res)=>{
    MobileModel.find({},(err,docs)=>{
        if(err){
            res.send(err);
        }
        if(docs){
            res.send(docs);
        }
    })
}
