import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const UserStores = () => {

  const [subscribed, setSubscribed] = useState([{}])

  useEffect(() => {
    axios.get('http://localhost:4000/subscribe/user/Navneet')
      .then(res => {
        console.log(res.data);
        setSubscribed(res.data)
      })
  }, [])

  return (
    <div className='flex flex-wrap justify-center'>
                <div className=' w-full h-full mt-8 flex flex-wrap justify-center gap-12'>
                    {/* <div>
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
                    </div>  */}
                    {
                      subscribed.map(shop => {
                        return (
                          <div className='flex flex-col'>
                            <div className='w-72 h-56 m-2 rounded-2xl bg-slate-200 hover:scale-110 transition-all duration-500 cursor-pointer'></div>
                            <div className='text-center font-semibold text-xl mt-4'>{(shop.StoreName)}</div>
                          </div>
                        )
                      })
                    }
                </div>
    </div>
  )
}