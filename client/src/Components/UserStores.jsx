import React from 'react'

export const UserStores = () => {
  return (
    <div className='flex flex-wrap justify-center'>
                <div className=' w-full h-full mt-8 flex flex-wrap justify-center gap-12'>
                    <div>
                        <div className='w-72 h-56 m-2 rounded-2xl bg-slate-200 hover:scale-110 transition-all duration-500 cursor-pointer'></div>
                        <div className='text-center font-semibold text-xl mt-4'>Store 1</div>
                    </div> 
                    <div>
                      <div className='w-72 h-56 m-2 rounded-2xl bg-slate-200 hover:scale-110 transition-all duration-500 cursor-pointer'></div>
                        <div className='text-center font-semibold text-xl mt-4'>Store 2</div>
                    </div> 
                    <div>
                        <div className='w-72 h-56 m-2 rounded-2xl bg-slate-200 hover:scale-110 transition-all duration-500 cursor-pointer'></div>
                        <div className='text-center font-semibold text-xl mt-4'>Store 3</div>
                    </div> 
                </div>
    </div>
  )
}