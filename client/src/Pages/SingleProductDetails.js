import React from 'react'
import Footer from '../Components/Footer'
import DeliveryFive from '../Components/DeliveryFive'
import ProductImage from '../Components/ProductImage'

const SingleProductDetails = () => {
    return(
        <div className=''>
            <DeliveryFive />

            {/* flex container*/}
            <div className='flex h-9'>
                <ProductImage />
               {/*<ProductDetails />
     */} 
            </div>

            <Footer />
        </div>
    )
}

export default SingleProductDetails;