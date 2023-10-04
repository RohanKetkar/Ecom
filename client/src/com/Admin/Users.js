import React from 'react'
import Adminmenu from '../Adminmenu'
import { Helmet } from 'react-helmet'

const Users = ({title}) => {
  return (
    <div>
      <Helmet>
  <title>{title}</title>
</Helmet>
        <Adminmenu />
        <div className="h-[50vh]">

        
        <h3>users</h3>
        </div>
    </div>
  )
}

export default Users