import React from 'react'

const ApiImage = ({url}) => {
  return (
  
  <img
                src={`http://localhost:5000/uploads/${url}`}
                alt={"image from api"}
                className="w-full h-52 object-cover"
              />

  )
}

export default ApiImage