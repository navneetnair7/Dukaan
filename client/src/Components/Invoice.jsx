import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Invoice = () => {

    const [ products, setProducts ] = useState([{}])

    const getCartData = () => {
        axios.get(`http://localhost:4000/cart/Navneet`)
            .then(res => {
                setProducts(res.data)
            })
    }

    useEffect(() => {
        getCartData()
    }, [])

  return (
    <div>
        <div className='flex'>
            <div className='w-1/4 mx-auto'>
                Items:
            </div>
            <div className='w-1/4 mx-auto'>
                Quantity:
            </div>
            <div className='w-1/4 mx-auto'>
                Price:
            </div>
        </div>
        {products.map((product) => {
            return(
                <div className='flex justify-between mb-10'>
                    <div className='w-1/4 mx-auto'>{product.ItemName}</div>
                    <div className='w-1/4 mx-auto'>
                        {/* <button className='mr-10 border border-gray-400 w-10 rounded-xl hover:bg-gray-600 hover:text-white text-center'>-</button> */}
                        {product.Quantity}
                        {/* <button className='ml-10 border border-gray-400 w-10 rounded-xl hover:bg-gray-600 hover:text-white text-center'>+</button> */}
                    </div>
                    <div className='w-1/4 mx-auto'>{product.Price}</div>
                </div>
            )
        })
    }
    </div>
  )
}

export default Invoice