var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var MobileSchema= new Schema({

    mobileId:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        unique:true
    },
    brand:{
        type:String
    },
    image:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true
    },
    availableOffers:{
        type:Array
    },
    highlights:{
        type:Array
    },
    warranty:{
        type:String
    },
    reviews:{
        type:Array
    },
    discount:{
        type:String
    },
   delivery:{
       type:String
   },
   description:{
       type:String
   }

})

module.exports=mongoose.model('phone',MobileSchema);