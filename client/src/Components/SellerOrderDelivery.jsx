import React from 'react'


export const SellerOrderDelivery = () => {
  return (
    <div className='ml-12'>
        <p className='text-md font-semibold'>In Delivery</p>
        <div className='flex gap-12 mt-3 '>
            <div className='w-20 h-20 bg-white p-2 object-contain'>
                <img src='/images/plane.png' alt="sending" />
            </div>
            <div className='my-auto text-4xl font-bold'>
                3
            </div>
        </div>
    </div>
  )
}