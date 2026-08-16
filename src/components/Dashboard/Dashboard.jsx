import React from 'react'
import { Navigate } from 'react-router-dom'

const Dashboard = () => {

    const token = localStorage.getItem("token")


    if(!token) {
        return <Navigate  to={"/signup"} />
    }

  return (
    <div>This is dashboard page it needs login to access</div>
  )
}

export default Dashboard