var mongoose=require('mongoose');

exports.connectToDB=(mongoURL)=>{
  // console.log("connectiing to db")
    mongoose.connect(mongoURL,err=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("connected to DB");
        }
    })
}