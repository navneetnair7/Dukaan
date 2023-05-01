import React from 'react'
import { useParams } from 'react-router-dom'
import UserDetailsTab from '../Components/UserDetailsTab'

export const UserProfile = () => {

  const { name } = useParams()

  return (
    <div className=''>
        <div className='h-[650px] bg-gradient-to-b from-ouryellow '>
          <UserDetailsTab name={name} />
        </div>
    </div>
  )
}

export default UserProfile