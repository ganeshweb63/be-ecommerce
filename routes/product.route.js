var express=require('express');
var productController=require('../controllers/product.controller');

var router=express.Router();

router.post('/addProduct',productController.addProduct);
router.get('/productList',productController.productList);
router.delete('/:productId',productController.deleteProduct);
router.put('/:productId',productController.updateProduct);
router.get('/InProduct',productController.InProduct);

module.exports=router;
