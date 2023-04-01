import React from 'react'
import StapleItem from './StapleItem'

const Staples = () => {
    
  return (
    <div className='mx-20 h-1/4 mt-20'>
        <p className='text-center text-3xl'>Daily Staples</p>
        <div className='border border-gray-300 my-2 mx-5' />
        <div className='flex justify-between mx-10'>
            <StapleItem />
        </div>
    </div>
  )
}

export default Staples