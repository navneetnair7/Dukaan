import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const GridItem = () => {

    const { name } = useParams()
    const navigate = useNavigate()

    const [ product, setProduct ] = useState({
        Name: "",
        Price: 0,
        Quantity: 1
    })

    const [ items, setItems ] = useState([{
        Name: "",
        Price: 0,
        Image: ""
    }])

    const AddtoCart = async (item) => {
        // console.log(item.name);
        // setProduct({
        //     Name: item.name,
        //     Price: item.price,
        //     Quantity: 1
        // })
        // console.log(product);
        await axios.post('http://localhost:4000/cart/add', {
            customer: "Navneet",
            name: item.name,
            price: item.price,
            quantity: 1
        })
    }

    const getProducts = () => {
        axios.get(`http://localhost:4000/category/${name}`)
            .then(res => {
                // console.log(res.data);
                let productsData = res.data;
                let data = getProductsArray(productsData);
                // console.log(data);
                setItems(data);
                // console.log(items);
            })
    }

    const handleProduct = (e, name) => {
        if (e.target.tagName !== "BUTTON") {
            e.preventDefault();
            navigate(`/product/${name}`)
          }
    }

    const getProductsArray = (data) => 
        data.map((row) => ({
            Name: row.Name,
            Price: row.Price,
            Image: row.Image,
        }))

    useEffect(() => {
        // console.log(name);
        // console.log(product);
        getProducts();
    }, [product])

    return (
        items.map((item) => {
            return(
                <div className='flex flex-col w-1/4'>
                    <div className='flex justify-center p-6 border-2 border-gray-200 rounded-xl mt-8 w-11/12 h-80 flex-col hover:cursor-pointer' onClick={(e) => handleProduct(e, item.Name)}>
                        <div className='h-72 w-72'>
                            <img src={item.Image} className='rounded-xl' alt={item.Name}/>
                        </div>
                        <div className=''>
                            <div className='text-center font-semibold text-xl text-gray-700' >{item.Name}</div>
                            <div className='text-center text-gray-700 mb-6' >Rs. {item.Price}</div>
                        </div>
                        <button className="bg-green-500 hover:bg-green-700 h-10 w-full -mt-5 text-white text-center font-semibold rounded" onClick={() => AddtoCart({name: item.Name, price: item.Price})}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            )
        })
    )
}

export default GridItem