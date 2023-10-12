import React from "react";
import Adminmenu from "../Adminmenu";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Select } from "antd";
const { Option } = Select;
const Createitem = ({ title }) => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");

  const geteallcategory = async (e) => {
    try {
      let { data } = await axios.get("/api/v1/category/all-category");
      if (data?.success) {
        toast.success("True");
        setCategories(data?.category);
        // console.log(data);
      } else {
        toast.error("check");
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("photo", photo);
      productData.append("category", category);
      const { data } = axios.post(
        "/api/v1/product/create-product",
        productData
      );
      if (data?.success) {
        toast.error(data?.message);
        // console.log(productData);
        getallproducts();
      } else {
        // console.log(productData);
        toast.success("Product Created Successfully");
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  const getallproducts = async () => {
    let { data } = await axios.get("/api/v1/product/getallproduct");
    try {
      if (data.sucess) {
        toast.success("great");
      } else {
        toast.error("check");
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    geteallcategory();
  }, []);
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Adminmenu />
      <div className="bg-blue-400 w-[30vw] ml-[40%] mt-6 text-[19px] p-6">
        <Select
          bordered={false}
          placeholder="Select a category"
          size="large"
          showSearch
          className="form-select mb-3"
          onChange={(value) => {
            setCategory(value);
          }}
        >
          {categories?.map((c) => (
            <Option key={c._id} value={c._id}>
              {c.name}
            </Option>
          ))}
        </Select>
        <div className="mb-3">
          <label className="btn btn-outline-secondary col-md-12">
            {photo ? photo.name : "Upload Photo"}
            <input
              type="file"
              name="photo"
              accept="image/*"
              width="90px"
              onChange={(e) => setPhoto(e.target.files[0])}
              hidden
            />
          </label>
        </div>
        <div className="mb-3">
          {photo && (
            <div className="text-center">
              <img
                src={URL.createObjectURL(photo)}
                alt="product_photo"
                className="h-[50px]"
              />
            </div>
          )}
        </div>
        <div className="mb-3">
          <input
            type="text"
            value={name}
            placeholder="write a name"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <textarea
            type="text"
            value={description}
            placeholder="write a description"
            className="form-control"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            type="number"
            value={price}
            placeholder="write a Price"
            className="form-control"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            value={quantity}
            placeholder="write a quantity"
            className="form-control"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <Select
            bordered={false}
            placeholder="Select Shipping "
            size="large"
            showSearch
            className="form-select mb-3"
            onChange={(value) => {
              setShipping(value);
            }}
          >
            <Option value="0">No</Option>
            <Option value="1">Yes</Option>
          </Select>
        </div>
        <div className="mb-3">
          <button className="bg-blue-700 p-5" onClick={handleCreate}>
            CREATE PRODUCT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Createitem;
