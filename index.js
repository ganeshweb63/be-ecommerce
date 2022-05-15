var express=require('express');
var env=require('dotenv');
var cors=require('cors');


env.config();
var dbServer=require('./services/db.service');
var userRouter=require('./routes/user.route');
var productRouter=require('./routes/product.route');
var mobileRouter=require('./routes/mobile.route')

dbServer.connectToDB(process.env.MONGO_URL);


var app=express();
app.use(cors())
app.use(express.json());
app.use(userRouter);
app.use(productRouter);
app.use(mobileRouter);







app.get('/healthcheck',(req,res)=>{
    res.send("App is Running safe...")
})

app.listen(process.env.PORT_NO,()=>{
    console.log("server started on", process.env.PORT_NO)
})


// sendgrid api key
// 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  

// nodemailer api key
// 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