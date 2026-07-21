
import { useState } from "react"
import someimage from "./assets/someimage.jpg"
import TodoList from "./components/Todolist"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Homepage from "./components/Homepage"
import Footer from "./components/Footer"
import Hero from "./components/Hero"

function App() {
  // props
  // const [fruit,setFruit] = useState("mango")
  // const fruit  = "Apple"
  // const age = 22

  let [age,setAge] = useState(22)

  const [fruit,setFruit] = useState("mango")


  

  //  setFruit("Apple")
 


//  const sum  =  ()=> setAge(age+10)
  const [count,setCount] = useState(0)
  const [show,setShow] = useState (true)
 
  

  const [name,setName] = useState("riwaj")
  const [color,setColor] = useState ("gray")
  
  // console.log(`some mesage with variable `)



  return (
    <>



{/* <img src={someimage} alt=""/> */}
{/* <div className="flex gap-4">
      <button onClick={()=>setCount(count-1)} className="border border-gray-400">-</button>
      <h1 className="text-2xl font-semibold"> {count}</h1>
    <button onClick={()=>setCount(count+1)} className="border border-gray-400">+</button>
     <button onClick={() => setCount(0)}>Reset</button>


</div>

<div className="flex">
     <button onClick={()=>setName("riwaj")} className="border border-gray-400">Name</button>
      <h1 className="text-2xl font-semibold"> {name}</h1>
    <button onClick={()=>setName("neupanee")} className="border border-gray-400">Surname</button>
    
</div>



<div className="flex flex-col items-center gap-5">
  {show ?   <h1>Some message</h1> : ""}
 
  <button onClick={()=>setShow(!show)} className="border border-gray-400">
    {show ? "hide" : "show"}

  </button>

 <div>
      <input type= {show? "text"  : "password"} className="border border-gray-400" />
<div>
</div>
 </div>



</div>


<div className="flex justify-center">
  <div className="flex flex-col">
    <div style={{backgroundColor : color }} className="h-20 w-20  rounded-full">
     
    </div>
     <button onClick={()=>setColor("red")} className="border border-gray-400">red</button>
      <button onClick={()=>setColor("yellow")} className="border border-gray-400">yellow</button>
      <button onClick={()=>setColor("green")} className="border border-gray-400">green</button>


  </div>

</div>

  
  <h1>color change</h1> */}

<Navbar/>
 
 <Routes>

<Route path="todo" element={ <TodoList/> } />
<Route index element = {<Hero/>} />
<Route path="*" element = {<h1> Page not found  </h1>}/>

</Routes>
<Footer/>





   </>
  )


}


export default App

