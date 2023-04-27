import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import CartShops from '../Components/CartShops'
import Spline from '@splinetool/react-spline'
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group } from '@mantine/core';


const Cart = () => {

    const [opened, { open, close }] = useDisclosure(false);
    
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
                // console.log(res.data)
                let itemData = res.data;
                let data = getItemArray(itemData)
                // console.log(data);
                console.log(data.map(row => row.ItemName));
                setProducts(data)
                // console.log(products);
            })
    }

    // const decreaseQuantity = (product) => {

    // }

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
        <div className=''>
            <div className='flex'>
                <p className='text-9xl ml-10 w-1/2 p-10 -mr-20'>Your Cart</p>
                <Spline scene='https://prod.spline.design/lfnkExhoqVfsh8q0/scene.splinecode' />
            </div>
            <CartShops />
            <div className='flex flex-col h-full'>
                <div className='w-1/2 min-h-min bg-white rounded-xl m-20 flex flex-col text-center pt-10 border-t-2'>
                    {/* <div className='flex'>
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
                    <br /> */}
                    {/* <div>{
                        products.map((product) => {
                            return(
                                <div className='flex justify-between mb-10'>
                                    <div className='w-1/4 mx-auto'>{product.ItemName}</div>
                                    <div className='w-1/4 mx-auto'>
                                        <button className='mr-10 border border-gray-400 w-10 rounded-xl hover:bg-gray-600 hover:text-white text-center'>-</button>
                                        {product.Quantity}
                                        <button className='ml-10 border border-gray-400 w-10 rounded-xl hover:bg-gray-600 hover:text-white text-center'>+</button>
                                    </div>
                                    <div className='w-1/4 mx-auto'>{product.Price}</div>
                                </div>
                            )
                        })
                    }
                    </div> */}
                </div>
                <div className= 'bg-white w-1/3 h-1/5 m-20 rounded-xl'>
                    <p className='h-1/2'>Total - </p>
                    <p className='h-1/4 text-center align-middle'>Delivery will be handled by the shopkeeper</p>
                    {/* <p className='h-1/3'>Subtotal - </p> */}
                    <div className='w-52 h-10 mx-auto border border-gray-500 rounded-xl text-center align-middle bg-green-200 hover:bg-green-600'>
                        <button className='w-full h-full hover:bg-yellow-700' onClick={placeOrder}>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart