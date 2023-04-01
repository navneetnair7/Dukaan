import React from 'react'

const Navbar = () => {
  return (
    <div className='flex w-full h-20 justify-between bg-yellow-300'>
      <div className='flex ml-5 w-1/2'>
        <div className='flex w-20 items-center justify-center'>
          <a href='/'>Logo</a>
        </div>
        <input className='p-1 ml-2 border border-slate-400 w-3/5 my-4 hover:border-slate-800 rounded-lg pl-2' placeholder='Search'/>
      </div>
      <div className='flex mr-5'>
        <div className='flex w-20 items-center justify-center mr-2 hover:duration-300 hover:bg-white'>
          <a href='#'>Orders</a>
        </div>
        <div className='flex w-20 items-center justify-center mr-2 hover:bg-white hover:duration-300'>
          <a href='#'>Login</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar