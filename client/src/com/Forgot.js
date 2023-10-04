import React from 'react'
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useAuth } from "./context/auth";
const Forgot = ({title}) => {
    const [email, setemail] = useState("");
    const [newpassword, setnewpassword] = useState("");
   const [auth , setauth] = useAuth()
    const navigate = useNavigate("");
    const [answer , setanswer] = useState("")
    const reset = async (e)=>{
        e.preventDefault()
        try{
        
        let res = await axios.post(`/api/v1/forgot`,{
        email,
        answer,
       newpassword,
       
        })

console.log(res)
        if(res){
        toast.success("Login")
        navigate('/signin')
        }
        }catch(e){
          console.log(e)
        }
        
          }
  return (
    <div>    <div>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <div className="flex justify-center items-center  mt-[50px] bg-gradient-to-r from-[#1CADD9] to-[#02084B] w-[100%] h-[100vh]">
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <div className=" w-[30vw]  p-5 rounded-lg    bg-gradient-to-r from-[#1CADD9] to-[#02084B]  ">
        <h1 className="text-[40px] ml-[10%] text-white">Reset Form</h1>
        <form
          className="grid gap-[40px] rounded-sm mt-5"
          onSubmit={reset}
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
            type="text"
            placeholder="Enter your answer"
            value={answer}
            onChange={(e) => {
              setanswer(e.target.value);
            }}
            required
          />
          <input
            className="text-[1.5em] outline-none rounded"
            type="password"
            placeholder="Enter your new password"
            value={newpassword}
            onChange={(e) => {
              setnewpassword(e.target.value);
            }}
            required
          />

          
          <button className="bg-white text-black cursor-pointer hover:text-white hover:bg-black text-[24px] p-5" type="button" onClick= {reset} >
          Reset
            </button>
           
       
        </form>
      </div>
    </div>
  </div></div>
  )
}

export default Forgot