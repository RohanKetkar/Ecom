import React from 'react'
import { Authprovider} from '../src/com/context/auth'
import './style.css'
const Layout = ({children}) => {
  return (
   <Authprovider>
{children}
   </Authprovider>
  )
}

export default Layout