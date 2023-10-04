import React from "react";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useAuth } from "./context/auth";

const Signin = ({ title }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
 const [auth , setauth] = useAuth()
  const navigate = useNavigate("");
  const handlechange = async (e)=>{
e.preventDefault()
try{

let res = await axios.post(`/api/v1/login`,{
email,
password
})
if(res){
toast.success("Login")
setauth({
  ...auth ,
  user:res.data.user ,
  token :res.data.token
})
localStorage.setItem("auth" , JSON.stringify(res.data))
navigate('/')
}
}catch(e){
  console.log(e)
}

  }
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="flex justify-center items-center  mt-[50px] bg-gradient-to-r from-[#1CADD9] to-[#02084B] w-[100%] h-[100vh]">
        <Helmet>
          <title>{title}</title>
        </Helmet>

        <div className=" w-[30vw]  p-5 rounded-lg    bg-gradient-to-r from-[#1CADD9] to-[#02084B]  ">
          <h1 className="text-[40px] ml-[10%] text-white">SignIn Form</h1>
          <form
            className="grid gap-[40px] rounded-sm mt-5"
            onSubmit={handlechange}
          >
           
           
            <input
              className="text-[1.5em] outline-none rounded"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              required
            />
            <input
              className="text-[1.5em] outline-none rounded"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              required
            />

            <div className="flex flex-col justify-center">
            <button className="bg-white text-black cursor-pointer hover:text-white hover:bg-black text-[24px] p-5" type="button" onClick={()=>{navigate("/forgot")}}>
              forgot
              </button>
              <button className="mt-6 bg-white text-black cursor-pointer hover:text-white hover:bg-black text-[24px] p-5" type="submit" onClick={handlechange} >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
