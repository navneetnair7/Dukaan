import React from 'react'

export const UserOrders = () => {
  return (
    <div className='w-11/12 ml-12 p-4 mt-8'>
        <p className='font-bold text-xl'>Your Past Order Items</p>
        <div className='w-1/2 border-2 mt-4 flex p-4 gap-4 rounded-lg'>
            <div className='w-28 h-28 bg-slate-200 mt-4'>
                <image src='/images/banana.png' />
            </div>
            <div className='w-10/12 bg-slate-50 pt-2 pl-4'>
                <p className='text-xl font-semibold'>Lays</p>
                <div className='p-4'>
                <p className=''>Rs: 20</p>
                <p className='text'>Store: Venus</p>
                <p className='text'>Order Date: 28-04-2023</p>
                </div>
            </div>
        </div>
    </div>

  )
}

export default UserOrders
