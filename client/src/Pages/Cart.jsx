import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Cart = () => {

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

    const getItemArray = (data) => 
        data.map((row) => ({
            ItemName: row.ItemName,
            Quantity: row.Quantity,
            Price: row.Price
        }))

    useEffect(() => {
        getCartData()
    }, [])

    const CartItem = () => {
        products.map((product) => {
            return(
                <div className='w-20 mx-auto flex justify-between'>
                    <p className='mx-auto'>{product.ItemName}</p>
                    <p className='mx-auto'>{product.Quantity}</p>
                    <p className='mx-auto'>{product.Price}</p>
                </div>
            )
        })
    }

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
        </div>
    )
}

export default Cart