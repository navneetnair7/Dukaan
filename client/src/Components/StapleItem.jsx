import React from 'react'
import DailyItems from './DailyItems'

const StapleItem = () => {
  return (
    DailyItems.map((daily) => {
        return(
            <div className='flex flex-col w-40 hover:shadow-2xl bg-yellow-100 rounded-lg'>
                <div className='flex h-fit justify-center pt-2'>
                    <img src={daily.img} className='h-28'/>
                </div>
                <div className='text-center'>{daily.name}</div>
            </div>
        )
    })
  )
}

export default StapleItem