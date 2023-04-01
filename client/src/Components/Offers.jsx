import React from 'react'

const Offers = () => {
  return (
    <div className='flex h-20 mx-16 text-white'>
        <div className='bg-green-400 h-full mr-2 w-2/5 rounded-lg text-center text-3xl hover:ease-in duration-300 hover:shadow-xl hover:shadow-gray-700'>
          Offer 1
        </div>
        <div className='bg-green-400 mr-2 w-2/5 rounded-lg text-center text-3xl hover:ease-in duration-300 hover:shadow-xl hover:shadow-gray-700'>
          Offer 2
        </div>
        <div className='bg-green-400 mr-2 w-2/5 rounded-lg text-center text-3xl hover:ease-in duration-300 hover:shadow-xl hover:shadow-gray-700'>
          Offer 3
        </div>
    </div>
  )
}

export default Offers