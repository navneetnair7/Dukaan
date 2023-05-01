import React from 'react'

export const UserNavbar = () => {
  return (
    <div>
     <div className='rounded-3xl border-gray-200 border-2 w-10/12 ml-6 mt-32 flex-cols pt-2 pb-4 pl-2 items-center justify-center'>
        <div className='rounded-3xl  w-11/12 h-[44px] pt-0.5 mt-4 hover:bg-yellow-200'>
            <p className='font-semibold mt-2 ml-8 '>My Orders</p>
        </div>
        <div className='rounded-3xl  w-11/12 h-[44px] pt-0.5 mt-4 hover:bg-yellow-200'>
            <p className='font-semibold mt-2 ml-8 '>My Khata</p>
        </div>
        <div className='rounded-3xl  w-11/12 h-[44px] pt-0.5 mt-4 hover:bg-yellow-200'>
            <p className='font-semibold mt-2 ml-8 '>Settings</p>
        </div>
        <div className='rounded-3xl  w-11/12 h-[44px] pt-0.5 mt-4 hover:bg-yellow-200'>
            <p className='font-semibold mt-2 ml-8 '>Logout</p>
        </div>
     </div>
    </div>
  )
}

export default UserNavbar