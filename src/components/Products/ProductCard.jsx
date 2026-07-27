import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({item}) => {
  return (
  <Link to={`/products/${item.id}`} className="hover:translate-y-5 transition-all duration-1000 hover:border hover:border-gray-400">
         <div className="h-100">
               <img src= {item.image} alt="" className="h-full" />
         </div>
            <h1>{item.name}</h1>
            <h1>{item.brand}</h1>
            <h1>{item.price}</h1>

         </Link>
  )
}

export default ProductCard