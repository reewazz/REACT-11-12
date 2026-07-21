import { Link } from "react-router-dom"

function Navbar(){
     return (
    
        <>
    <nav className="flex  justify-between items-center py-10 px-20  ">
      <h1 className="text-4xl font-bold" >Athena</h1>
      <div className="flex gap-8 text-2xl">
        <Link href="#">Home</Link>
        <Link to={"/todo"}>Todo</Link>
        <Link href="#">Services</Link>
        <Link href="#">Products</Link>
        <Link href="#">Contacts</Link>
      </div>
    </nav>
      
        </>
    )
}

export default Navbar
