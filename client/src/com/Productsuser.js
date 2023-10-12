import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Prices } from "./Costs";
const Productsuser = () => {
  const [products, setproduct] = useState([]);
  const [categoryi, setcategory] = useState([]);
  const [checke, setcheck] = useState([]);
  const [radior, setradion] = useState([]);
  async function getallproduct() {
    try {
      let { data } = await axios.get("/api/v1/product/getallproduct");
      if (data.success) {
        setproduct(data.product);
        // console.log(data);
      } else {
        console.log("check");
      }
    } catch (e) {
      console.log(e);
    }
  }
  const getallcategory = async () => {
    try {
      let { data } = await axios.get("/api/v1/category/all-category");
      // console.log(data.category);
      if (data.success) {
        setcategory(data.category);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handlefilter = (value, id) => {
    let all = [...checke];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setcheck(all);
  };
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/filter", {
        checke,
        radior,
      });
      setproduct(data?.product);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!checke.length || !radior.length) getallproduct();
    getallcategory();
  }, [checke.length, radior.length]);
  useEffect(() => {
    if (checke.length || radior.length) filterProduct();
  }, [checke, radior]);

  return (
    <div>
      <div className="filter">
        {categoryi.map((c) => {
          return (
            <div>
              <label
                onChange={(e) => {
                  handlefilter(e.target.checked, c._id);
                  console.log(e.target.checked);
                }}
              >
                {c.name} <input type="checkbox" />
              </label>
            </div>
          );
        })}
      </div>

      {Prices.map((price) => {
        return (
          <div className="flex">
            <label
            // onChange={(q) => setradion(q.target.value)}
            >
              <input
                onChange={(q) => setradion(q.target.value)}
                type="radio"
                value={price.array}
                name="sameName"
              />
              {price.name}
              {console.log(price)}
            </label>
          </div>
        );
      })}

      <div className="flex">
        {products.map((i) => {
          return (
            <NavLink to={`/products/${i.slug}`}>
              <div
                key={i._id}
                className="bg-blue-700 w-[305px] h-[260px] mr-6 p-6 text-orange-700 border rounded mt-6"
              >
                <img
                  src={`api/v1/product/productphoto/${i._id}`}
                  width="140px"
                  height="90px"
                />
                <h1 key={i._id}>name : {i.name}</h1>
                <p>description : {i.description}</p>
                <button className="bg-blue-900 p-1">More</button>
                <button>Addtocart</button>
              </div>
            </NavLink>
          );
        })}
        {/* {console.log(products)} */}
      </div>
    </div>
  );
};

export default Productsuser;
