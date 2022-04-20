var UserModel=require('../models/user.model');
var jwt=require('jsonwebtoken');
var bcrypt=require('bcryptjs');

exports.register=(req,res)=>{
    var body=req.body;
    var password=body.password;
     var salt=bcrypt.genSaltSync(10);
     var hashedPassword=bcrypt.hashSync(password,salt);
     console.log("hashedPassword",hashedPassword);
     body.password=hashedPassword;
     console.log("body",body)

    var userDocument=new UserModel(body);   
    userDocument.save((err,docs)=>{
        if(err){
            console.log(err.message);
            res.send(err.message)
        }
        else{
            console.log(docs)
            if(docs){
                var _id=docs.id;
                var token=jwt.sign({payload:_id}, 'dl');
                res.send({token:token, isLoggedIn:true});
                // res.send('user registered successfully')
            }
        }
    })
}

exports.login=(req,res)=>{
    var body=req.body;
    var emailId=body.emailId;
    var password=body.password;
    console.log(emailId);
    console.log(password);

    UserModel.find({emailId:emailId},(err,result)=>{
        if(err){
            console.log(err);
            res.send(err.message)
        }
        if(result.length > 0){
            var user=result[0];
            // if(user.password == password){
                if(bcrypt.compareSync(password,user.password)){
                var _id=user._id;
               var token=jwt.sign({payload:_id},'dl');
               res.send({token:token,isLoggedIn:true});
            }
            else{
                res.send("incorrect password")
            }
        }
        else{
            res.send("this email not registered with us!!")
        }
    })

}

exports.changePassword=(req,res)=>{
    var body=req.body;
    var emailId=body.emailId;
    var currentPassword=body.currentPassword;
    var newPassword=body.newPassword;

    UserModel.find({emailId:emailId},(err,result)=>{
        if(err){
            res.send(err.message);
        }
        if(result.length>0){
            var user=result[0];

            if(user.password==currentPassword){
                var _id=user.id;
                if(_id){
                    UserModel.findOneAndUpdate({emailId:emailId},{password:newPassword},(err,doc,responce)=>{
                        if(err){
                            res.send(err.message)

                        }
                        if(doc){
                            console.log("doc",doc);
                            res.send("password update Succesfully...")
                        }
                    })
                }
            }
            else{
                res.send("password incorrect...")
            }
        }
            else{
                res.send("this email is not registered with us!!")
            }
        
    })
}
