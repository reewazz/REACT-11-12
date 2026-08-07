import React, { useEffect, useState } from 'react'

const BlogsList = () => {

    const [blogs,setBlogs] = useState([])


const fetchBlogs = async ()=> {
    const response = await fetch ("http://localhost:5000/blog/getAll")
    const finalResponse = await response.json()
  
    setBlogs(finalResponse)
}

useEffect(()=> {
fetchBlogs()
},[])


console.log(blogs,"blogs")

  return (
    <div>This is blog page</div>
  )
}

export default BlogsList