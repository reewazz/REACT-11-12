import { useContext } from "react"
import { Link } from "react-router-dom"
import CounterContext from "./contexts/CounterContext"
import AuthContext from "./contexts/AuthContext"

function Navbar(){


const {token,setToken} = useContext(AuthContext)



    const handleLogout =()=> {
      localStorage.removeItem("token")
      setToken(null)
    }


    const {count} = useContext(CounterContext)

     return (
    
        <>

    <nav className="flex  justify-between items-center py-10 px-20  ">
      <div className="flex gap-8 text-2xl items-center">
        <Link to={'/'}>Home</Link>
        <Link to={"/todo"}>Todo</Link>
        <Link href="#">Services</Link>
        <Link to={"/products"}>Products</Link>
        <Link href="#">Contacts</Link>
        <h1>{count}</h1>

<div>
     {token ? <button onClick={handleLogout} className="bg-black text-white px-4 py-2 rounded-2xl">Logout</button>
      : <Link to={"/signup"}>
        <button className="bg-black text-white px-4 py-2 rounded-2xl">Login</button>
      </Link> }   
</div>
      </div>
    </nav>
      
        </>
    )
}



export default Navbar
