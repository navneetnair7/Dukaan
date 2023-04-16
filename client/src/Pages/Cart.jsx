import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    
    const navigate = useNavigate();
    const initialCart = [{
        ItemName: "",
        Quantity: 0,
        Price: 0
    }]
    const [ products, setProducts ] = useState(initialCart)

    const getCartData = () => {
        axios.get(`http://localhost:4000/cart/Navneet`)
            .then(res => {
                console.log(res.data)
                let itemData = res.data;
                let data = getItemArray(itemData)
                console.log(data);
                console.log(data.map(row => row.ItemName));
                setProducts(data)
                console.log(products);
            })
    }

    const placeOrder = async () => {
        await axios.delete(`http://localhost:4000/cart/Navneet`)
            .then(navigate('/OrderSuccessful'))
    }

    const getItemArray = (data) => 
        data.map((row) => ({
            ItemName: row.ItemName,
            Quantity: row.Quantity,
            Price: row.Price
        }))

    useEffect(() => {
        getCartData()
    }, [])

    return (
        <div className='h-screen bg-white'>
            <p className='text-9xl ml-10'>Your Cart</p>
            <div className='w-1/2 h-auto bg-yellow-100 rounded-xl m-20 flex flex-col text-center pt-10'>
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
                    <div className='w-1/4 mx-auto'>
                        Total: 
                    </div>
                </div>
                <br />
                <div>{
                    products.map((product) => {
                        return(
                            <div className='flex justify-between mb-10'>
                                <div className='w-1/4 mx-auto'>{product.ItemName}</div>
                                <div className='w-1/4 mx-auto'>{product.Quantity}</div>
                                <div className='w-1/4 mx-auto'>{product.Price}</div>
                                <div className='w-1/4 mx-auto'>{product.Quantity} * {product.Price}</div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            <div className='w-1/2 ml-20'>
                <div className='w-52 h-10 mx-auto border border-gray-500 rounded-xl text-center align-middle bg-green-200 hover:bg-green-600'>
                    <button className='w-full h-full' onClick={placeOrder}>Place Order</button>
                </div>
            </div>
        </div>
    )
}

export default Cart