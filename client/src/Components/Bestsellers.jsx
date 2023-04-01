import React from 'react'

const Bestsellers = () => {
  return (
    <div className='mx-40 mt-10 h-2/3 bg-white text-black text-center'>
        <p className='text-5xl underline underline-offset-8'>
            Best Sellers
        </p>
        <div className='flex h-96 pt-10'>
            <div className='w-1/3 mx-5 border rounded-lg border-black'>
                <p className='mt-10 text-5xl'>1</p>
            </div>
            <div className='w-1/3 mx-5 border rounded-lg border-black'>
                <p className='mt-10 text-5xl'>2</p>
            </div>
            <div className='w-1/3 mx-5 border rounded-lg border-black'>
                <p className='mt-10 text-5xl'>3</p>
            </div>
        </div>
    </div>
  )
}

export default Bestsellers