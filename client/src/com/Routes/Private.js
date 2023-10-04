import {useState , useEffect} from 'react'
import {useAuth} from '../context/auth'
import { Outlet } from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import Spinner from '../Spinner'
//outlet used for nested routing
const PrivateRoute = () => {
    const [ok,setok] = useState(false)
    const [auth , setauth]= useAuth()
    useEffect(()=>{
const authcheck =async ()=>{
let res = await axios.get("/api/v1/user-dasboard")
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

export default PrivateRoute