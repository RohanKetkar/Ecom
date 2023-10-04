import React from "react";
import Adminmenu from "../Adminmenu";
import Admindetails from "./Admindetails";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import axios from "axios";

import { toast } from "react-hot-toast";

import Dashboard from "../Dashboard";
const Createcategory = ({ title }) => {
  const [category, setcategory] = useState([]);
  const [name, setname] = useState("");
  const [updated, setupdate] = useState("");
  const [selected, setselected] = useState(null);
  const [visible, setvisible] = useState(false);

  const handlechange = async (e) => {
    // console.log(e.target.value);
    setname(e.target.value);
    // console.log(namee);
  };
  const handlecreate = async (e) => {
    try {
      // e.preventDefault();
      let { data } = await axios.post("/api/v1/category/create-category", {
        name,
      });
      getecategory();
      // console.log(data);
      toast.success(`${name} created `);
      console.log(name);
    } catch (e) {
      console.log(e);
    }
  };
  const handlesubmit = async (e) => {};
  async function getecategory() {
    try {
      let { data } = await axios.get("/api/v1/category/all-category");
      // console.log(data);
      if (data.success) {
        setcategory(data.category);
      }
    } catch (e) {
      console.log(e);
    }
  }
  const handleedit = async (e) => {
    try {
      // console.log(e.target.value);
      // console.log(selected);
      let { data } = await axios.put(
        `/api/v1/category/category-update/${selected._id}`,
        {
          name: name,
        }
      );
      // console.log(selected);
      toast("Enter the categry name and edit");
      if (data?.success) {
        toast.success(`${name} updated with ${selected.name}`);
        getecategory();
      } else {
        toast.error("check");
      }
      console.log(selected._id);
    } catch (e) {
      console.log(e);
    }
  };
  async function handledelet(id) {
    try {
      // console.log("ok");
      let { data } = await axios.delete(
        `/api/v1/category/delete-category/${id}`
      );

      // console.log(data);
      if (data?.success) {
        toast.success("Deleted");
        getecategory();
      } else {
        toast.error("check");
      }
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getecategory();
  }, []);
  return (
    <div className="h-[60vh]">
      Admindasboard
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Adminmenu />
      <div
        className="p-5 ml-6 text-[29px]  w-[50vw] h-[120vh] text-white mt-6  mb-[50px] border rounded "
        style={{ backgroundColor: "#0D0D12" }}
      >
        <h1>All Categories</h1>
        <div>
          <input
            type="text"
            onChange={handlechange}
            style={{ color: "gray", padding: "11px", outline: "none" }}
          ></input>
          <button
            onClick={handlecreate}
            className=" bg-blue-700 p-3 mb-5 rounded  cursor-pointer"
          >
            create catgory
          </button>
        </div>
        <div className="flex mt-6">
          <div className="mr-8">
            <div className="flex text-blue-600">
              <h3 className="mr-9">Categories</h3>
              <h3>Actions</h3>
            </div>
            <h4>
              {category.map((c) => (
                <div className="flex " key={c._id}>
                  <h3 className="w-[30px]" key={c.id}>
                    {c.name}
                  </h3>
                  <div
                    className="ml-[30vw] bg-blue-700 p-3 mb-5 rounded  cursor-pointer"
                    onClick={(e) => {
                      handleedit(e);
                      setvisible(!visible);
                      setupdate(c.name);
                      setselected(c);
                    }}
                  >
                    Edit
                  </div>
                  <div
                    className=" bg-red-500 p-3 mb-5 rounded  cursor-pointer"
                    onClick={(e) => {
                      handledelet(c._id);
                      setselected(c);
                    }}
                  >
                    Delete
                  </div>
                </div>
              ))}
            </h4>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Createcategory;
