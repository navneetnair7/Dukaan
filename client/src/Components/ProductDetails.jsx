import React, { useEffect, useState } from 'react'
// import QuantityButton from './QuantityButton'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import AddQuantity from './AddQuantity'
// import AddToCart from './AddToCart'
// import graphic from '../images/graphic.png'

const ProductDetails =() => {

    const { name } = useParams();
    const navigate = useNavigate();

    const [ product, setProduct ] = useState({
        Name: "",
        Price: 0,
        Image: "",
        Descripton: "",
        Quantity: 1
    })
 
    const getProductDetails = () => {
        axios.get(`http://localhost:4000/product/${name}`)
            .then(res => {
                // console.log(res.data);
                let productDetails = res.data;
                setProduct(productDetails[0])
                setProduct(prevState => {return {...prevState, Quantity: 1}})
            }
        )
    }

    const AddtoCart = async (e, item) => {
        if (e.target.tagName === 'BUTTON'){
            // console.log(product);
            await axios.post('http://localhost:4000/cart/add', {
                customer: "Navneet",
                name: product.Name,
                price: product.Price,
                quantity: product.Quantity
            })
        }
    }

    useEffect(() => {
        // console.log(name);
        // console.log(product);
        getProductDetails();
    }, [])

    return(
        <div className='flex h-screen w-full'>
            <div className='w-1/2 h-1/2'>
                <img src={product.Image} alt = {product.Name} />
            </div>
            <div className='w-1/2 h-auto ml-32 mt-4'>
                <div className='text-3xl font-bold'>
                    <p>{product.Name}</p>
                </div>      
                <div className='pl-20 pt-7 text-xl font-semibold'>
                    <p>Rs. {product.Price}</p>
                </div>
                <div className='ml-12 mt-8'>
                    {/* <p className='ml-2 mb-text-slate-700'>Select unit</p> */}
                    {/* <QuantityButton /> */}
                </div>
                <hr className='mt-10'></hr>
                <div className='flex'>
                    <div className='mb-8 mt-8 pt-2 ml-20'>
                        <AddQuantity />
                    </div>
                    <div className='mt-8 mb-8 mx-auto w-2/3'>
                        <button className="bg-green-400 hover:bg-green-700 h-10 w-full text-white text-center font-semibold rounded border border-gray-500"
                        onClick = {(e) => AddtoCart(e, {name: product.Name, price: product.Price})}>
                            Add to Cart
                        </button>
                    </div>
                </div>
                <hr></hr>
                <div className='flex justify-center'>
                    <img src= "/images/graphic.png" alt='graphic'/>
                </div>
                <div className=' w-full pt-8' >
                    <p className='font-semibold'>About this item</p>
                    <p className='pt-2'>{product.Descripton}</p>
                </div>
                <div className='w-full'>
                    <button onClick={() => {navigate(-1)}} className='bg-green-400 hover:bg-green-700 h-10 w-1/2 mx-auto text-white text-center font-semibold rounded border border-gray-500'>Back to Products</button>
                </div>
                {/* <div className=' mt-8 w-full'>
                    <p className='font-semibold'>Ingredients</p>
                    <p>{details.ingredients}</p>
                </div>  */}
                {/* <div className='mt-8'>
                    <p className='font-semibold'>Expiry</p>
                    <p>Please refer to the packaging of the producfoexpiry date.</p>
                </div>          */}
            </div>
        </div>
    )
}

export default ProductDetails