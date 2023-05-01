import React, { useEffect, useState } from 'react'
import { UserCircle } from './UserCircle'
import axios from 'axios'

export const SellerProfileCard = (props) => {

  const id = props.id

  const [ seller, setSeller ] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:4000/subscribe/seller/${id}`)
      .then(res => {
        // console.log(res.data);
        setSeller(res.data[0][0])
        // console.log(seller);
      })
  }, [])

  return (
    <div className='w-10/12 h-20 bg-white rounded-[13px] mt-12 flex gap-8 shadow-md border-ouryellow border-2'>
      <div className='ml-8 my-auto'>
        <UserCircle name="Venus" />
      </div>
      <div className='w-1/3 p-2'>
        <p className='text-xl font-semibold'>{seller.StoreName}</p>
        <p className='font-light mt-1'>+91 1234567890</p>
      </div>
      <div className='w-1/4 h-16 border-2 border-slate-200 hover:bg-gray-200 bg-slate-100 rounded-[13px] justify-end ml-auto my-auto mr-8'>
        <p className='font-light ml-4 text-sm mt-1 '>Your Address</p>
        <p className='font-light ml-4 text-sm mt-1'>{seller.Address}</p>
      </div>
   </div>
  )
}