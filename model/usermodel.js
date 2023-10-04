const mongoose = require("mongoose")

const  userSchema = new mongoose.Schema({
name:{
    type:String,
    required:true,
    trim:true, //to remove extra white space
    
},
email:{
    type:String,
    required:true,
    unique:true // to have unique email
},
password:{
    type:String,
    required:true,

},

phone:{
    type:String,
    required:true,

},
address:{
    type:String,
    required:true,
    
},
answer:{
    type:String,
    required:true,
},

role:{
    type:Number,//can use the value boolean default 0 gives false 1 true
    default:0,
}
},{timestamp:true }) //timestamp true if new user gets created time will be shown
module.exports = mongoose.model("user",userSchema)