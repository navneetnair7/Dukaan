import React from 'react'

export const UserProfileCard = () => {
  return (
    <div className='border-2 w-1/3 h-1/4 rounded-xl float-right backdrop-blur-3xl'>
    <div className='text-2xl font-semibold pt-4 text-center'>Gitanjali Roy</div>
       <div className='mt-4 ml-10 '>gitanjaliroy@gmail.com</div>
       <div className='mt-2 ml-10'>+91 1234567890</div>
       <div className='w-1/3 h-36 ml-10 pt-4 mb-6 font-light'>
       Your Address
       <p className='mt-2'>Bandra, Mumbai</p>
    </div>
    </div>
  )
}

export default UserProfileCard