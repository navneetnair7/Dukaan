import React from 'react'
import Categories from '../Components/Categories'
import DeliveryFive from '../Components/DeliveryFive'
import Popular from '../Components/Popular'
import Recommendations from '../Components/Recommendations'
import Offers from '../Components/Offers'
import Bestsellers from '../Components/Bestsellers'
// import Staples from '../Components/Staples'
import BoughtTogether from '../Components/BoughtTogether'
import Users from '../Components/Users'
import Footer from '../Components/Footer'

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
      {/* <Staples /> */}
      <Users />
      <BoughtTogether />
      <Footer />
    </div>
  )
}

export default Home