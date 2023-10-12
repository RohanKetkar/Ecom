import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Productsmore = () => {
  let params = useParams();
  const [products, setproduct] = useState([]);
  async function getsingleproduct() {
    try {
      let { data } = await axios.get(
        `/api/v1/product/singleproduct/${params.slug}`
      );
      if (data.success) {
        // console.log(data.product);
        setproduct(data.product);
      }
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getsingleproduct();
  }, []);
  return (
    <div className="bg-blue-700 w-[100vw] h-[190vh] flex justify-center ">
      <div className="h-[100vh] bg-blue-600 w-[60vw] text-[26px] p-6 flex flex-col justify-center ml-[60px] rounded mt-6 text-orange-700">
        <img
          src={`/api/v1/product/productphoto/${products._id}`}
          width={"158px"}
          height={"165px"}
        />
        <h1>Name : {products.name}</h1>
        <h3>Description : {products.description}</h3>
        <h4>Category : {products.caategory}</h4>
        <h5>Addtocart</h5>
      </div>
    </div>
  );
};

export default Productsmore;
