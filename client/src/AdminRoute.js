import {useState , useEffect} from 'react'
import { useAuth } from './com/context/auth'
import { Outlet } from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import Spinner from './com/Spinner'
//outlet used for nested routing
const AdminRoute = () => {
    const [ok,setok] = useState(false)
    const [auth , setauth]= useAuth()
    useEffect(()=>{
const authcheck =async ()=>{
let res = await axios.get("/api/v1/admin-dasboard")
if(res.data.ok){
    setok(true)
}else {
    setok(false)
}
}
if(auth?.token) authcheck()
    },[auth?.token])

  return ok ? <Outlet /> : <Spinner />
}

export default AdminRoute