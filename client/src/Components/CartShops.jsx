import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'

const CartShops = () => {
    const [shops, setShops] = useState([])

    const getShopData = () => {
        axios.get('http://localhost:4000/subscribe/cart/Navneet')
            .then(res => {
                console.log(res.data);
                setShops(res.data)
            })
    }

    useEffect(() => {
        getShopData()
    }, [])

    return (
        <div className='flex h-1/2 w-full'>{
            shops.map((shop) => {
                return(
                    <div className='flex bg-yellow-50 flex-col m-10 w-1/3 justify-start rounded shadow-lg'>
                        <div className='h-auto w-auto mx-auto'>
                            <Spline scene='https://prod.spline.design/1ZvU-MI9PGAvG1Pl/scene.splinecode' />
                        </div>
                        <div className='flex flex-col text-center'>
                            <p className='text-3xl'>{shop.StoreName}</p>
                            <p className='text-xl'>{shop.Address}</p>
                        </div>
                        <div className='my-2 w-1/2 rounded-lg mx-auto'>
                            <button className='border rounded-lg w-full border-black h-full hover:bg-yellow-600'>Select</button>
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}

export default CartShops