import React from 'react'
import { useParams } from 'react-router-dom'
import UserDetailsTab from '../Components/UserDetailsTab'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

export const UserProfile = () => {

  const { name } = useParams()

  return (
    <div className=''>
      <Navbar />
        <div className='bg-gradient-to-b from-ouryellow '>
          <UserDetailsTab name={name} />
        </div>
        <Footer />
    </div>
  )
}

export default UserProfile