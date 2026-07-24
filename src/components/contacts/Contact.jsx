import React, { useEffect, useState } from 'react'
import ProductCard from '../Products/ProductCard'

const Contact = () => {

    const [value,setValue] = useState("Some value")
    const [count,setCount] = useState(0)
    const [prod,setProd] = useState([])
   

  


    const makeAlert= ()=> {
        alert("Alert")
        setCount(100)
    
    }

    useEffect ( ()=> {
  const productfromstorage =  JSON.parse(localStorage.getItem("productList"))

setProd(productfromstorage)


    } ,[])



  return (
    <div className='flex flex-col items-center text-2xl px-20'>
      
    <div className='grid grid-cols-3 gap-20'>
          {prod.map((item,index)=> (
            <ProductCard key={index} item={item}/>
      ))}
    </div>
    </div>
  )
}

export default Contact