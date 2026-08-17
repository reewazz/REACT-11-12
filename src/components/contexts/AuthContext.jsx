import { createContext, useEffect, useState } from "react";

const AuthContext = createContext()

export const AuthProvider = ({children})=> {



    const [token,setToken]  = useState(null)
    const [loading,setLoading] = useState(true)

        useEffect(()=> {
            const tokenfromlocal = localStorage.getItem("token")
            setToken(tokenfromlocal)
            setLoading(false)

        },[])

        console.log(token,"in context")
  

    return(

<AuthContext.Provider value={{token,setToken,loading}}>
    {children}
</AuthContext.Provider>

    )
     
}

export default AuthContext