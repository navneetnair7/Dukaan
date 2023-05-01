import React from 'react'

export const UserSubsProducts = () => {
  return (
    <div className='w-full mx-auto rounded-[13px] border-2 border-ouryellow pb-4'>
        <div className='flex justify-center items-center mt-4 gap-4'>
            <div className='w-1/4 items-center flex flex-col justify-center'>
              <div className='w-28 h-28 bg-slate-200 mt-4 object-contain'>
                  <img src='/images/milk.jpg' />
              </div>
              <p className='text font-semibold mt-2 '>Amul Milk</p>
              <p className='font-light'>Store Name</p>
            </div>
            <div className='w-1/4 items-center flex flex-col justify-center'>
              <div className='w-28 h-28 bg-slate-200 mt-4 object-contain'>
                  <img src='/images/rusk.jpeg' />
              </div>
              <p className='text font-semibold mt-2 '>Rusk</p>
              <p className='font-light'>Store Name</p>
            </div>
        </div>
    </div>
  )
}