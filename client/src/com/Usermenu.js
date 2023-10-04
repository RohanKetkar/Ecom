import React from 'react'
import { NavLink } from 'react-router-dom'

const Usermenu = () => {
  return (
    <div>Usermenu
        <div className=" flex">
        <div className='w-[60w] text-[40px] flex flex-col ml-[10vw] mt-[10vh]  bg-gray-100 p-5 text-blue-500'>
        <NavLink to="/dashboard/user/profile" className="active:bg-orange-700 hover:bg-orange-300" > profile </NavLink>
        <NavLink to="/dashboard/user/orders" className="active:bg-orange-700 hover:bg-orange-300"> orders</NavLink>
        
        </div>
       
    </div>
    </div>
  )
}

export default Usermenu