import React from 'react'
import Footer from '../Components/Footer'
import DeliveryFive from '../Components/DeliveryFive'
// import ProductImage from '../Components/ProductImage'
import ProductDetails from '../Components/ProductDetails'
// import ImageCarousel from '../Components/ImageCarousel'

const SingleProductDetails = () => {
    return(
        <div className='flex flex-col'>
            <DeliveryFive />

            {/* flex container*/}
            <div className='flex h-9'>
                {/* <ProductImage /> */}
                <ProductDetails />
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default SingleProductDetails;