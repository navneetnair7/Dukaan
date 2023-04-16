import React from 'react'

const Offers = () => {
  return (
    <div className='flex h-40 w-5/6 mx-auto text-white'>
        <div className='bg-green-400 mr-2 w-1/3 rounded-lg text-center text-3xl hover:ease-in duration-300 hover:shadow-xl hover:shadow-gray-700'>
          <img src='/images/offer1.jpg' className='w-full h-full' />
        </div>
        <div className='bg-green-400 mr-2 w-1/3 rounded-lg text-center text-3xl hover:ease-in duration-300 hover:shadow-xl hover:shadow-gray-700'>
          <img src='/images/offer2.jpg' className='w-full h-full' />
        </div>
        <div className='bg-green-400 mr-2 w-1/3 rounded-lg text-center text-3xl hover:ease-in duration-300 hover:shadow-xl hover:shadow-gray-700'>
          <img src='/images/offer3.jpg' className='w-full h-full' />
        </div>
    </div>
  )
}

export default Offers