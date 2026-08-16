import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { GetRequest, PostRequest } from '../http'

const BlogsList = () => {

    const [blogs,setBlogs] = useState([])

    const [formData,setFormData] = useState ( 
      {
      title: "",
    description: "",
  category: "",
    likes: 100,
    status: true,
    author: "",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Y0gi55HZHJ_9Tqz9Za1lSjwwoYuNknsLv6snN2eO7w&s=10",
  }
    )



const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [category, setCategory] = useState("");
const [author, setAuthor] = useState("");

const [categoryList,setCategoryList] = useState([])

const token = localStorage.getItem("token")

const fetchCategory = async ()=> {
  const res = await GetRequest("category/getAll")
  setCategoryList(res.data)

}



const fetchBlogs = async ()=> {
  
    const response = await GetRequest('blog/getAll')
    setBlogs(response.data)
}

useEffect(()=> {
fetchBlogs()
fetchCategory()
},[])


const handleSubmit = async ()=> {

  const blogpayload = {
      title: title,
    description: description,
  category: category,
    likes: 20000,
    status: true,
    author: author,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Y0gi55HZHJ_9Tqz9Za1lSjwwoYuNknsLv6snN2eO7w&s=10",
  }
  // const response  = await axios.post("http://localhost:5000/blog/create",body)
  const response  = await PostRequest("blog/create",blogpayload)
  console.log(response)




}




console.log(blogs,"blogs")

  return (
    <div>
       <h1 className="text-3xl font-bold text-center mb-8">
        All Blogs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            {/* Image */}
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-cover"
              />
            )}

            {/* Card Content */}
            <div className="p-5">
              {/* Category */}
              <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm mb-3">
                {item?.category?.title}
              </span>

              {/* Title */}
              <h2 className="text-2xl font-bold mb-2">
                {item.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 mb-4">
                {item.description}
              </p>

              {/* Author */}
              <p className="text-sm text-gray-500 mb-3">
                By <span className="font-semibold">{item.author}</span>
              </p>

              {/* Likes */}
              <div className="flex justify-between items-center">
                <span className="text-red-500">
                  ❤️ {item.likes} Likes
                </span>

                <span className="text-sm text-gray-400">
                  {new Date(item.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div class="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
  <div>
    <label for="title" class="block text-sm font-medium text-gray-700 mb-2">
      Title
    </label>
    <input
      type="text"
      id="title"
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      name="title"
      placeholder="Enter post title"
      class="w-full px-4 py-2 border border-gray-300 rounded-lg
             focus:ring-2 focus:ring-blue-500 focus:border-blue-500
             outline-none"
      required
    />
  </div>

  <div>
    <label for="description" class="block text-sm font-medium text-gray-700 mb-2">
      Description
    </label>
    <textarea
      id="description"
      name="description"
      value={description}
      onChange={(e)=>setDescription(e.target.value)}
      rows="5"
      placeholder="Enter blog description"
      class="w-full px-4 py-2 border border-gray-300 rounded-lg
             focus:ring-2 focus:ring-blue-500 focus:border-blue-500
             outline-none resize-none"
      required
    ></textarea>
  </div>

  <div>
    <label for="category" class="block text-sm font-medium text-gray-700 mb-2">
      Category
    </label>
    <select
      id="category"
      name="category"
          value={category}
      onChange={(e)=>setCategory(e.target.value)}
      class="w-full px-4 py-2 border border-gray-300 rounded-lg
             focus:ring-2 focus:ring-blue-500 focus:border-blue-500
             outline-none"
      required
    >
      {categoryList.map((item,index)=>(

      <option value={item._id}>  {item.title} </option>
      ))}
      
    </select>
  </div>
  <div>
    <label for="author" class="block text-sm font-medium text-gray-700 mb-2">
      Author
    </label>
    <input
      type="text"
      id="author"
      name="author"
          value={author}
      onChange={(e)=>setAuthor(e.target.value)}
      placeholder="Enter author name"
      class="w-full px-4 py-2 border border-gray-300 rounded-lg
             focus:ring-2 focus:ring-blue-500 focus:border-blue-500
             outline-none"
      required
    />
  </div>

  <div>
    <label for="image" class="block text-sm font-medium text-gray-700 mb-2">
      Image URL
    </label>
    <input
      type="url"
      id="image"
      name="image"
      placeholder="https://example.com/image.jpg"
      class="w-full px-4 py-2 border border-gray-300 rounded-lg
             focus:ring-2 focus:ring-blue-500 focus:border-blue-500
             outline-none"
    />
  </div>

  <div class="flex items-center gap-3">
    <input
      type="checkbox"
      id="status"
      name="status"
      class="w-4 h-4 text-blue-600 border-gray-300 rounded
             focus:ring-blue-500"
      checked
    />

    <label for="status" class="text-sm font-medium text-gray-700">
      Active
    </label>
  </div>


  <button
  onClick={handleSubmit}
    class="w-full bg-blue-600 hover:bg-blue-700 text-white
           font-medium py-2.5 px-4 rounded-lg
           transition duration-200 focus:outline-none
           focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
  >
    Create Post
  </button>
</div>
    </div>  
  )
}

export default BlogsList