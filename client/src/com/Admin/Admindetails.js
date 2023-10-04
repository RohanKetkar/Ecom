import React from "react";
import { useAuth } from "../context/auth";

const Admindetails = () => {
  const [auth] = useAuth();
  return (
    <div className="text-orange-700 bg-gray-100 p-5 w-[50vw]">
      {" "}
      Admindetails
      {/* {console.log(auth.user.name)} */}
      <h3 className="text-orange-500">Name : {auth?.user?.name}</h3>
      <h3 className="text-orange-500">Email : {auth?.user?.email}</h3>
      <h3 className="text-blue-900">Role : ADMIN</h3>
    </div>
  );
};

export default Admindetails;
