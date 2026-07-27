import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductData } from './ProductData'

const ProductDetailPage = () => {

    const {id} = useParams()
    const [products,setProducts] = useState(ProductData)

    const filteredProduct = products.filter((item,index)=> {
        return item.id ===  Number(id)

    })

  const product = filteredProduct[0]
  return (
    <>
    <div>This is detail page of product : {id} </div>
    <img src={product.image} alt="" />
    <div>This name is : {product.name} </div>
    <div>This price : {product.price} </div>

    </>
  )
}

export default ProductDetailPage