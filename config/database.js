const mongoose = require("mongoose")
require("dotenv").config()
async function connectwithdatabase (){
  await mongoose.connect(process.env.MONGO_URL,{
    }).then(()=>{console.log("working")})
.catch((e)=>{console.log(e)})

}
module.exports = connectwithdatabase