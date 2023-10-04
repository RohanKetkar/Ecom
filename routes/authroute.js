const express = require("express")
const router = express.Router()
const {registercontroller,logincontroller , testcontroller, forgotcontroller } = require("../controller/authcontroller")
const { requireSignin, checkadmin ,isadmin} = require("../middleware/authmiddleware")

//register || method post
router.post("/register",registercontroller)
router.post("/login", logincontroller)
router.get("/test",requireSignin,checkadmin, testcontroller)
router.get("/user-dasboard", requireSignin , (req,res)=>{
    res.status(200).send({ok:true})
} )
router.get("/admin-dasboard", requireSignin  ,isadmin,(req,res)=>{
    res.status(200).send({ok:true})
} )
router.post("/forgot" , forgotcontroller)
module.exports = router