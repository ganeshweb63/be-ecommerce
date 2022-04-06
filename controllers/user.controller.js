var UserModel=require('../models/user.model');

exports.register=(req,res)=>{
    var body=req.body;
    var userDocument=new UserModel(body);
    userDocument.save((err,docs)=>{
        if(err){
            console.log(err.message);
            res.send(err.message)
        }
        else{
            console.log(docs)
            if(docs){
                res.send('user registered successfully')
            }
        }
    })
}