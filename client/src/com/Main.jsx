import React from "react";
import image from "../assets/element.jpg";
import { Helmet } from "react-helmet";
import {useNavigate} from 'react-router-dom'
const Main = ({ title }) => {
  const navigate = useNavigate()
  function handlenavigation(){
    navigate("/Category")
  }
  return (
    <div className=" w-[100vw] h-[90vh] flex mt-[10%] p-[10px] shadow-xl">
      <Helmet>
        {/* //In title the main title on the window heading will be shown so repeat in every component for different title */}
        <title>{title}</title>
      </Helmet>

      <div className="  w-[50vw] text-[50px] text-black p-[80px]">
        <h1>
          Ensure The Authenticity  <span className="text-blue-400 font-bold">The Future Brand</span>
        </h1>
        <h3>
          This is the best thing to get the good thing at a good cost , THE
          FUTURE BRAND help you to get the best deal
        </h3>
        <button className=" bg-blue-600 rounded text-white mt-[50px] text-[20px] p-[20px] hover:text-black" onClick={handlenavigation}>category</button>
      </div>
      <div className="w-[50vw] h-[50vh] shadow-xl shadow-blue-700 ">
        <img src={image} className="" />
      </div>
    </div>
  );
};

export default Main;
