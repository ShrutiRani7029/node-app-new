const express=require('express')
const productcontroller = require('../controller/product') // module
const router=express.Router();


//server api path pr ye wala router attach krdega
router
.post('/', productcontroller.createproduct)
.get('/', productcontroller.getallproduct)
.get('/:id', productcontroller.getproduct)
.put('/:id', productcontroller.updateproduct)
.delete('/:id', productcontroller.deleteproduct)

exports.router = router;