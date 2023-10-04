//created to compare the token for having security on basis of token
const JWT = require("jsonwebtoken")
const usermodel = require("../model/usermodel")
exports.requireSignin = async(req,res,next)=>{
//token is there in headers
// and after that it is decode key 
try{
    const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRETKEY)
    req.user = decode
    next()
}catch(e){
    console.log(e)
}
}

//admin

exports.checkadmin = async(req,res , next)=>{
try{
let user = await usermodel.findById(req.user._id)
if(user.role !==1){
    return res.status(500).send({
        message:"check admin from the user database now"
    })
}
else{
    next()
}
}catch(e){ 
    console.log(e)
    res.status(500).send({
        message:"check admin"
    })
}
}
exports.isadmin = async (req, res, next) => {
    try {
      const user = await usermodel.findById(req.user._id);
      if (user.role !== 1) {
        return res.status(200).send({
          success: false,
          message: "UnAuthorized Access",
        });
      } else {
        next();
      }
    } catch (error) {
      console.log(error);
      res.status(401).send({
        success: false,
        error,
        message: "Error in admin middelware",
      });
    }
  };