import axios from "axios"


const token = localStorage.getItem("token")

 export const GetRequest = async (url)=> {
     const res =  await axios.get (`http://localhost:5000/${url}`, {headers : {
      authorization : `Bearer ${token}`
    }})
    return res
 }


  export const PostRequest = async (url,body)=> {
     const res =  await axios.post (`http://localhost:5000/${url}`,body, {headers : {
      authorization : `Bearer ${token}`
    }})
    return res
 }


 
 




