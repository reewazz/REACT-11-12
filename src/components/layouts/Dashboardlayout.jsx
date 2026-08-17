import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboardlayout = () => {
  return (
 <div className='flex w-full'>
  <div className='h-screen bg-black text-white w-1/6 p-10 flex flex-col gap-6 '>
   <Link to={"/admin"} className='hover:bg-white hover:text-black'>Dashboard</Link>
   <Link to="blog">Blog</Link>
   <Link to = "product">Product</Link>
  </div>
<div className='w-4/6'>
      <Outlet/>
</div>
</div>
  )
}

export default Dashboardlayout