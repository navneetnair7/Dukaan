import React from 'react'
import Categories from '../Components/Categories'
import DeliveryFive from '../Components/DeliveryFive'
import Popular from '../Components/Popular'
import Recommendations from '../Components/Recommendations'
import Offers from '../Components/Offers'
import Bestsellers from '../Components/Bestsellers'
import Staples from '../Components/Staples'

const Home = () => {
  return (
    <div className=''>
      <DeliveryFive />
      <div className='flex h-96'>
        <Popular />
        <Recommendations />
      </div>
      <Offers />
      <Categories />
      <Bestsellers />
      <Staples />
    </div>
  )
}

export default Home