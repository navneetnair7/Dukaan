import React from 'react'

export const UserStores = () => {
  return (
    <div className='flex flex-wrap justify-center'>
        <div className=' w-full h-full mt-5 flex flex-wrap justify-center gap-3'>
            <div>
                <div className='w-52 h-44 m-2 rounded-2xl bg-slate-200 hover:scale-110 transition-all duration-500 cursor-pointer'></div>
                <div className='text-center mt-8'>Store 1</div>
            </div> 
            <div>
              <div className='w-52 h-44 m-2 rounded-2xl bg-slate-200 hover:scale-110 transition-all duration-500 cursor-pointer'></div>
                <div className='text-center mt-8'>Store 2</div>
            </div> 
            <div>
                <div className='w-52 h-44 m-2 rounded-2xl bg-slate-200 hover:scale-110 transition-all duration-500 cursor-pointer'></div>
                <div className='text-center mt-8'>Store 3</div>
            </div> 
        </div>
    </div>
  )
}