var express=require('express');
var MobileController=require('../controllers/mobile.controller');
var router=express.Router();

router.post('/addMobiles',MobileController.addMobiles);
router.get('/list',MobileController.listMobile);

module.exports=router;