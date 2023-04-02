import React from 'react'

const Footer = () => {
  return (
    <div className='bg-yellow-100 h-72 flex justify-center pt-10 '>
        <div className='w-52'>
            <p className='font-bold'>Contacts</p>
            <p>Email: dukaan@gmail.com</p>
            <p>Phone: 911</p>
        </div>
        <div className='w-52 ml-80'>
            <p className='font-bold'>Feedback</p>
            <p>Please send us your ideas, bug, reports, suggestions! Any feedback would be appreciated.</p>
        </div>
    </div>
  )
}

export default Footer