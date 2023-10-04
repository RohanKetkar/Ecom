import React, { useState, useEffect } from "react";
import Adminmenu from "../Adminmenu";

import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/getallproduct");
      if (data.success) {
        setProducts(data.product);
        // console.log(products);
        toast.success("created");
      }
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="row dashboard">
      <div className="col-md-3">
        <Adminmenu />
      </div>
      <div className="col-md-9 ">
        <h1 className="text-center">All Products List</h1>
        <div className="d-flex flex-wrap">
          {products?.map((p) => (
            <div
              className="w-[60vw] bg-blue-700"
              style={{ width: "690px", height: "160px" }}
              key={p._id}
            >
              <div className="text-[19px] text-white flex flex-col justify-center items-center p-6">
                <h5 className="card-title">Name : {p.name}</h5>
                <p className="card-text">Description : {p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
