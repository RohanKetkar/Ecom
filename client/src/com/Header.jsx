import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./context/auth";
import {useState} from 'react'
import {useEffect} from 'react' 
import {AiFillCaretDown} from 'react-icons/ai'
const Header = () => {
  
const [auth , setauth] = useAuth()

function handlelogout(){
  setauth({
    ...auth,
    user:null,
    token:""
  })
  console.log(auth.user.name)
  localStorage.removeItem("auth")
}
let name1 = auth.user;

  return (
    
    <div>

    
    <div className="flex justify-between text-xl  border-b-[1px]  w-[100vw] sticky top-0 bg-white p-5">
    

      <div >
        <NavLink to="/">
          <h1 className=" ml-5">LOGO</h1>
        </NavLink>
      </div>
     
    <div >

      {
        !auth.user ? <> <NavLink to="/Register" className=" text-blue-500 hover:text-blue-800  transition-all text-[25px] mr-[25px] ">Register</NavLink> <NavLink to="/Signin" className=" text-blue-500 hover:text-blue-800  transition-all text-[25px] mr-[25px]">SignIn</NavLink> </>:<><NavLink to = "/" onClick = {handlelogout} className="text-blue-500 hover:text-blue-800  transition-all text-[25px]">Logout <span>[  {JSON.stringify(name1.name)} ]</span></NavLink> <NavLink to ={`/dashboard/${auth?.user?.role===1 ?"admin" :"user"}`}className="text-blue-500 hover:text-blue-800  transition-all text-[25px] mr-5">Dashboard</NavLink></>
      }
  
    
    

      
      
          <NavLink to="/Category" className=" text-blue-500 hover:text-blue-800  transition-all text-[25px] mr-[25px]">Category</NavLink>
         
    
   
  
        
         
          <NavLink to="/Cart" className=" text-blue-500 hover:text-blue-800  transition-all text-[25px] mr-[45px]">Cart (0)</NavLink>
        </div>
      </div>
       </div>
     
    
  );
};

export default Header;
