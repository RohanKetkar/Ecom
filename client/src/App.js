import Header from "./com/Header";
import Footer from "./com/Footer";
import Register from "./com/Register";
import Signin from "./com/Signin";
import Cart from "./com/Cart";
import Main from "./com/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import toast, { Toaster } from "react-hot-toast";

import React from "react";
import Dashboard from "./com/Dashboard";
import PrivateRoute from "./com/Routes/Private";
import Forgot from "./com/Forgot";
import Admindasboard from "./com/Admin/Admindasboard";
import AdminRoute from "./AdminRoute";
import Createcategory from "./com/Admin/Createcategory";
import Createitem from "./com/Admin/Createitem";
import Users from "./com/Admin/Users";
// import { Authprovider } from '../src/com/context/auth'
import Products from "./com/Admin/Product";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main title={"Rockify - Ecommerce"} />} />
          <Route
            path="/Register"
            element={<Register title={"Register - Rockify"} />}
          />
          <Route
            path="/Signin"
            element={<Signin title={"Signin - Rockify"} />}
          />
          <Route path="/Cart" element={<Cart title={"Cart - Rockify"} />} />
          <Route
            path="/Category"
            // element={<Category title={"Category - Rockify"} />}
          />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="user" element={<Dashboard />} />
          </Route>
          <Route path="/dashboard" element={<AdminRoute />}>
            <Route
              path="admin"
              element={<Admindasboard title={"Admin-Dashboard - Rockify"} />}
            />
            <Route path="/dashboard/admin/products" element={<Products />} />
            <Route
              path="/dashboard/admin/create-category"
              element={
                <Createcategory title={"dashboard - createcategory_Rockify"} />
              }
            />
            <Route
              path="/dashboard/admin/create-item"
              element={<Createitem title={"dashboard - createitem_Rockify"} />}
            />
            <Route
              path="/dashboard/users"
              element={<Users title={"dashboard - users_Rockify"} />}
            />
          </Route>
          <Route
            path="/forgot"
            element={<Forgot title={"Forgot - Rockify "} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
