import React from "react";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Register = ({ title }) => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [answer ,setanswer] = useState("")
  const navigate = useNavigate("");
  async function handlechange(e) {
    console.log(e);
    e.preventDefault();

    try {
      const res = await axios.post(`/api/v1/register`, {
        name,
        email,
        address,
        password,
        phone,
        answer
      });
      if (res && res.data.success) {
        toast.success("successfully Registered")
        navigate("/Signin");
          
     
        // toast.success("Working so now is it rs")
       
      } else {
        toast.error("Form Incomplete");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <Toaster />
      <div className="flex justify-center items-center  mt-[50px] bg-gradient-to-r from-[#1CADD9] to-[#02084B] w-[100%] h-[100vh]">
        <Helmet>
          <title>{title}</title>
        </Helmet>

        <div className=" w-[30vw]  p-5 rounded-lg    bg-gradient-to-r from-[#1CADD9] to-[#02084B]  ">
          <h1 className="text-[40px] ml-[10%] text-white">Register Form</h1>
          <form
            className="grid gap-[40px] rounded-sm mt-5"
            onSubmit={handlechange}
          >
            <input
              required
              className="text-[1.5em] outline-none rounded "
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              className="text-[1.5em] outline-none rounded"
              type="text"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => {
                setaddress(e.target.value);
              }}
              required
            />
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
            <input
              className="text-[1.5em] outline-none rounded"
              type="text"
              placeholder="Enter your phone"
              value={phone}
              onChange={(e) => {
                setphone(e.target.value);
              }}
              required
            />
            <input
              className="text-[1.5em] outline-none rounded"
              type="text"
              placeholder="Enter your name"
              value={answer}
              onChange={(e) => {
                setanswer(e.target.value);
              }}
              required
            />
            <div className="flex justify-center bg-white text-black cursor-pointer hover:text-white hover:bg-black transition-all p-5 text-[24px] " onClick={handlechange}>
              <button type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
