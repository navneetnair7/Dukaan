import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import CartShops from '../Components/CartShops'
import Spline from '@splinetool/react-spline'
import { useDisclosure } from '@mantine/hooks';
// import { Modal, Button, Group } from '@mantine/core';


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
                let itemData = res.data;
                let data = getItemArray(itemData)
                console.log(data.map(row => row.ItemName));
                setProducts(data)
            })
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
                <p className='text-8xl ml-10 w-1/2 p-10'>Your Cart</p>
                <Spline scene='https://prod.spline.design/lfnkExhoqVfsh8q0/scene.splinecode' />
            </div>
            <CartShops />
            <div className='flex flex-col h-full'>
                <div className='w-1/2 min-h-min bg-white m-20 flex flex-col text-center pt-10 border-t-2'>
                </div>
                <div className= 'bg-white w-1/3 h-1/5 m-20'>
                    {/* <p className='h-1/2'>Total - </p> */}
                    {/* <p className='h-1/4 text-center align-middle'>Delivery will be handled by the shopkeeper</p> */}
                    {/* <div className='w-52 h-10 mx-auto border border-gray-500 rounded-xl text-center align-middle bg-ouryellow hover:bg-green-600'>
                        <button className='w-full h-full hover:bg-yellow-700 rounded-xl' onClick={placeOrder}>Place Order</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Cart