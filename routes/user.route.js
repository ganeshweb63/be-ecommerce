var express=require('express');
var userController=require('../controllers/user.controller');
var Middleware=require('../middlewares/auth.middleware')

var router=express.Router();


router.post('/register',userController.register);
router.post('/login',userController.login);
router.post('/changePassword',Middleware.authMiddleware,userController.changePassword);

module.exports=router;