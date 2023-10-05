import React, { useState, useEffect } from "react";
import Adminmenu from "../Adminmenu";

import axios from "axios";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/getallproduct");
      if (data.success) {
        setProducts(data.product);
        toast.success("created");
      }
    } catch (error) {
      console.log(error);
      // toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="">
      <div className="">
        <Adminmenu />
      </div>
      {products ? (
        <div>
          <h1 className="">All Products List</h1>
          <div className="flex">
            {products?.map((p) => (
              <NavLink to={`/dashboard/admin/products/${p.slug}`}>
                <div
                  className="w-[50vw] bg-blue-700 mr-6 ml-6"
                  style={{ width: "390px", height: "305px" }}
                  key={p._id}
                >
                  <div
                    className="text-[19px] text-white flex flex-col justify-center items-center p-6 "
                    key={p._id}
                  >
                    <img
                      src={`/api/v1/product/productphoto/${p._id}`}
                      width={"300px"}
                    />
                    <h5 className="">Name : {p.name}</h5>
                    <p className="">Description : {p.description}</p>
                    <h3>{p.quantity}</h3>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default Products;
