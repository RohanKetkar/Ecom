const express = require("express")
const {requireSignin, isadmin} = require("../middleware/authmiddleware")
const {creatproduct,getallproduct,getpaginated,getsingleproduct,productphoto,deleteproduct,updateproduct} = require("../controller/produtcontroller")

const formidable =require( 'express-formidable');


const router = express.Router()

router.post("/create-product", requireSignin,isadmin,formidable(),creatproduct)
router.get("/getallproduct",getallproduct)
router.get("/paginated/:page",getpaginated)
router.get("/singleproduct/:name",getsingleproduct)
router.get("/productphoto/:pid",requireSignin,isadmin, productphoto)
router.delete("/delete-product/:name",requireSignin,isadmin,deleteproduct)
router.put("/update-product/:id",requireSignin,isadmin,formidable(),updateproduct)

module.exports = router