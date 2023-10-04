import React from 'react'
import { Helmet } from 'react-helmet'
const Dashboard = ({title}) => {
  return (
    <div>
    <Helmet>
    <title>{title}</title>
    </Helmet>
    <div >Dashboard user</div>
    </div>
  )
}

export default Dashboard