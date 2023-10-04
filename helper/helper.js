const bcrypt = require("bcrypt")
exports.hashpassword = async(password)=>{
try{
    const saltrounds = 10
const hashedpassword = await bcrypt.hash(password,saltrounds)
return hashedpassword
}catch(e){
    console.log(e)
}
}
exports.comparepassword = async(password,hashedpassword)=>{
    return bcrypt.compare(password,hashedpassword)
}