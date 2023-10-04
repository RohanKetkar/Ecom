import React from "react";
import Adminmenu from "../Adminmenu";
import Admindetails from "./Admindetails";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import axios from "axios";

import { toast } from "react-hot-toast";

import Dashboard from "../Dashboard";
const Admindasboard = ({ title }) => {
  return (
    <div className="h-[60vh]">
      Admindasboard
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Adminmenu />
    </div>
  );
};

export default Admindasboard;
