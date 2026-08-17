import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext'

const Dashboard = () => {    
  return (
    <div>This is dashboard page it needs login to access</div>
  )
}

export default Dashboard