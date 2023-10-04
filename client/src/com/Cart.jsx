import React from "react";
import { Helmet } from "react-helmet";
const Cart = ({ title }) => {
  return (
    <div className="h-[100vh]">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      Cart 
    </div>
  );
};

export default Cart;
