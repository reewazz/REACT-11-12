import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import AuthContext from './contexts/AuthContext'

const PrivateRoutes = ({children}) => {

    const {token,loading} = useContext(AuthContext) 

    console.log(token,"here")

    if (loading) {
      return "Loading ....."
    }


    if(!token) {
        return <Navigate  to={"/signup"} />
    }

  return (
    <>
  {children}
  </>
  )
}

export default PrivateRoutes