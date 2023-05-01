import React, { useEffect, useState } from 'react'
import { UserCircle } from './UserCircle'
import axios from 'axios'

export const UserProfileCard = (props) => {

  const name = props.name
  const [ user, setUser ] = useState([{}])

  useEffect(() => {
    axios.get(`http://localhost:4000/user/${name}`)
      .then(res => {
        // console.log(res.data);
        setUser(res.data[0])
      })
  }, [])

  return (
   <div className='w-10/12 h-20 bg-white rounded-[13px] mt-12 flex gap-8 shadow-md'>
      <div className='ml-8 my-auto'>
        <UserCircle name={name} />
      </div>
      <div className='w-1/3 p-2'>
        <p className='text-xl font-semibold'>{name}</p>
        <div className='w-2/3 flex justify-between'>
        <p className='font-light mt-1'>{user.Email}</p>
        <p className='font-light mt-1'>{user.Contact_No}</p>
        </div>
      </div>
      <div className='w-1/4 h-16 border-2 border-slate-200 hover:bg-gray-200 bg-slate-100 rounded-[13px] justify-end ml-auto my-auto mr-8'>
        <p className='font-light ml-4 text-sm mt-1 '>Your Address</p>
        <p className='font-light ml-4 text-sm mt-1'>{user.City}</p>
      </div>
   </div>
  )
}

export default UserProfileCard