import React from 'react'
import UserDetailsTab from '../Components/UserDetailsTab'
// import UserNavbar from '../Components/UserNavbar'

export const UserProfile = () => {
  return (
    <div className=' flex flex-wrap justify-center space-x-32 '>
        <div className='w-11/12'>
            <UserDetailsTab />
        </div>
    </div>
  )
}

export default UserProfile