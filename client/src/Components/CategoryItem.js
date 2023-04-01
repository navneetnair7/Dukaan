import React from 'react'
import items from './CategoryItems'

const CategoryItem = () => {
  return (
    items.map((item) => {
        return (
            <div className= 'flex flex-col w-1/4' style={{background: `${item.color}`}}>
                <div className='flex h-80 justify-center'>
                    <img src={item.img} className='h-40 mt-10'/>
                </div>
                <div className='text-center text-3xl mb-10'>{item.name}</div>
            </div>
        )
    })
  )
}

export default CategoryItem