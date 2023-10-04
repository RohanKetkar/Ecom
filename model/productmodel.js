const mongoose = require("mongoose")
const productmodel = new mongoose.Schema({
    name:{
        type:String,
       required:true,

    }, 
    slug:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:mongoose.ObjectId,
        ref:"Category",
    },
    photo:{
        data:Buffer,
        contentType:String,
    },
    shipping:{
type:String,

    },
    quantity:{
        type:Number,
        required:true,
        default:1,
    }

},{timestamps:true})

module.exports = mongoose.model("Product",productmodel)