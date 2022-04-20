var ProductModel=require('../models/product.model');

exports.addProduct=(req,res)=>{
   var body= req.body;

   var document=new ProductModel(body);
   document.save((err,doc)=>{
       if(err){
           console.log(err);
           res.send(err.message);
       }
       else{
           console.log(doc);
           if(doc._id){
            res.send("Product added succesfully")
        }
       }
      
   })
}

exports.productList=(req,res)=>{
    ProductModel.find({},(err,docs)=>{
        if(err){
            res.send(err.message)
        }
        if(docs){
             res.send(docs);
        }
    })
}


exports.deleteProduct=(req,res)=>{
    var productId=req.params.productId;

    ProductModel.findOneAndRemove({productId:productId},(err,docs)=>{
        if(err){
            res.send(err.message)

        }
        if(docs){
            // res.send(docs)
            res.send("deleted successfully");
        }
    })
}


exports.updateProduct=(req,res)=>{
    var productId=req.params.productId;
    var productId=req.body.productId;
    var name=req.body.name;
    var brand=req.body.brand;
    var price=req.body.price;
    var colour=req.body.colour;
    var size=req.body.size;
    var AvailableOffers=req.body.AvailableOffers;
    var highlights=req.body.highlights;
    var description=req.body.description;
    var paymentMethod=req.body.paymentMethod;
   


    ProductModel.updateMany({
         productId:productId,
         name:name,
         price:price,
         brand:brand,
         colour:colour,
         size:size,
         AvailableOffers:AvailableOffers,
         highlights:highlights,
         description:description,
         paymentMethod:paymentMethod

        },(err,docs)=>{
        if(err){
            res.send(err)
            console.log(err.message)
        }
        if(docs){
            // res.send(docs)
            res.send("Update successfully")
        }
    })
}

exports.InProduct=(req,res)=>{
    ProductModel.find({productId:productId},(err,doc)=>{
        if(err){
            res.send(err)
        }
        if(doc){
            res.send("doc",doc)
        }
    })
}