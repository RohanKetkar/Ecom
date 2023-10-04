
const { compare } = require("bcrypt")
const { hashpassword, comparepassword } = require("../helper/helper")
const usermodel = require("../model/usermodel")
const JWT = require("jsonwebtoken")
require("dotenv").config()

exports.registercontroller = async (req, res) => {
    try {
        const { name, email, password, phone, address , answer ,role} = req.body
        //validation 
        if (!name) {
            return res.send({ message: "name is require" })
        }
        if (!email) {
            return res.send({ message: "email is require" })
        }
        if (!password) {
            return res.send({ message: "password is require" })
        }
        if (!phone) {
            return res.send({ message: "phone is require" })
        }
        if (!address) {
            return res.send({ message: "address is require" })
        }
        if (!answer) {
            return res.send({ message: "answer is require" })
        }
        //checking  user
        const existinguser = await usermodel.findOne({ email })
        //check existing user
        if (existinguser) {
            return res.status(200).send({
                success: false,
                message: "already user there login"
            })
        }
        //register user
        const hashedpassword = await hashpassword(password)
        //save 
        const user = await new usermodel({ name, email, phone, address, password: hashedpassword, answer ,role}).save()
        res.status(201).send({
            success: true,
            message: "user registered",
            user,
        })

    } catch (e) {
        console.log(e)
        res.status(500).send({
            success: false,
            message: "message",
            e
        })
    }
}

//login controller

exports.logincontroller = async (req, res) => {
    try {
        
        const { email, password } = req.body
        //validation
        if (!email || !password) {
            res.status(200).send({
                message: "check email or the here password"
            })
        }
        

        // checking user on basis of email
        const user = await usermodel.findOne({ email })
        if (!user) {
            return res.status(500).send({
                message: "check user"
            })
        }
        const match = await comparepassword(password, user.password)
        if (!match) {
            return res.status(500).send({
                message: "check password"
            })
        }
        //token are made from sign method after sign on id basis we are creating token
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRETKEY, { expiresIn: "7d" })

        res.status(200).send({
            message: "jwt success and login success",
            user: {
                name: user.name,
                email: user.email,
                address: user.address,
                role:user.role
            },
            token
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "check login ",
            e
        })
    }
}

exports.forgotcontroller = async(req , res)=>{
try{
    const {email,newpassword , answer} = req.body
let user = await usermodel.findOne({email })
let email1 = user.email
if(!user){
    res.status(200).send({
        message:"user"
    })
}
if(user){
    let newpass = await hashpassword(newpassword)
   let firstanswer = user.answer
   if(firstanswer == answer){
    await usermodel.findByIdAndUpdate( user._id , { password:newpass})
    res.status(200).json({
        success:true,
        message:"Successfull ",
       user
    })
   }

}
}catch(e){
console.log(e)
}
}


//test controller
exports.testcontroller = (req, res) => {
    res.status(200).send({
        message: "secured"
    })
}

//admin 


