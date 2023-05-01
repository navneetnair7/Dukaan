import React from 'react'

export const SellerOrders = () => {
  return (
    <div className='w-full p-4 border-2 border-ouryellow rounded-[13px]'>
        <div className='w-full mt-4 flex p-4 gap-4 rounded-lg'>
            <div className='w-28 h-28 bg-slate-200 mt-4 object-contain'>
                <img src='/images/milk.jpg' alt='milk'/>
            </div>
            <div className='w-10/12 bg-slate-50 pt-2 pl-4'>
                <p className='text-xl font-semibold'>Milk</p>
                <div className='p-4'>
                <p className=''>Rs: 20</p>
                <p className='text'>From: Rama Nimkar</p>
                <p className='text'>Address: A-609, Om Shanti Om Towers</p>
                <p className='text'>Order Date: 28-04-2023</p>
                </div>
            </div>
        </div>
        <hr></hr>
    </div>
  )
}