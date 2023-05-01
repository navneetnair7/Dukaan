import React from 'react'
import { SellerProfileCard } from './SellerProfileCard'
import { SellerNoOfOrders } from './SellerNoOfOrders'
import { SellerOrderDelivery } from './SellerOrderDelivery'
import { SellerOrders } from './SellerOrders'

export const SellerProfile = (props) => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
      <SellerProfileCard id={props.id}/>
        <div className=' w-full flex flex-wrap justify-center items-center gap-20 mt-12'>
          <div className='w-1/5 h-32 border-2 shadow-md rounded-[13px]'>
            <SellerNoOfOrders />
          </div>
          <div className='w-1/5 h-32 border-2 shadow-md rounded-[13px]' >
            <SellerOrderDelivery />
          </div>
        </div>
        <div className='w-11/12 mt-8'>
        <div className=' w-2/3 mx-auto h-12 pt-2 text-center font-bold text-2xl rounded-t-[13px] mt-4 bg-ouryellow hover:bg-yellow-500'>Orders</div>
        <SellerOrders />
        </div>
      </div>
    </div>
  )
}