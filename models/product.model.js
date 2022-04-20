var mongoose=require('mongoose');
var Schema =mongoose.Schema;
var ProductSchema=new Schema({
    productId:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String
    },
    name:{
        type:String,
        required:true,
        unique:true,
        minlength:1,
        maxlength:1000
    },

    brand:{
        type:Array
    },

    
    price:{
        type:Array
    },

    colour:{
        type:Array
    },

    size:{
        type:Array
    },

    AvailableOffers:{
        type:Array
    },
   
    highlights:{
        type:Array
    },
    description:{
        type:Array
    },
    
    paymentMethod:{
        type:Array
    },
   
})

module.exports=mongoose.model('product',ProductSchema)