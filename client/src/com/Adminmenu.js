import React from 'react'
import { NavLink } from 'react-router-dom'
import Admindetails from './Admin/Admindetails'
const Adminmenu = () => {
  return (
    <div className=" flex">
        <div className='w-[60w] text-[40px] flex flex-col ml-[10vw] mt-[10vh]  bg-gray-100 p-5 text-blue-500'>
        <NavLink to="/dashboard/admin/create-category" className="active:bg-orange-700 hover:bg-orange-300" > create Category </NavLink>
        <NavLink to="/dashboard/admin/create-Item" className="active:bg-orange-700 hover:bg-orange-300"> create Item</NavLink>
        <NavLink to="/dashboard/users" className="active:bg-orange-700 hover:bg-orange-300">users</NavLink>
        </div>
        <div className='text-[40px] ml-[10vw] mt-[10vh]'>
            <Admindetails/>
        </div>
    </div>
  )
}

export default Adminmenu