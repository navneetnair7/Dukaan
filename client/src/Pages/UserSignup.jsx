import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserSignup = () => {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    aadhar: "",
    name: "",
    contact: "",
    age: "",
    city: ""
  })

  let name, value
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({...user, [name]: value })    
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:4000/user', {
      aadhar: user.aadhar,
      name: user.name,
      contact: user.contact,
      age: user.age,
      city: user.city
    }).then(navigate('/'))
  }

  return (
    <div className='mx-auto w-1/2'>
      <form className='flex flex-col'>
        <input 
          placeholder='Aadhar Number' 
          onChange={getUserData} 
          name='aadhar' 
          value={user.aadhar} 
        />
        <input 
          placeholder='Name' 
          onChange={getUserData} 
          name='name' 
          value={user.name} 
        />
        <input 
          placeholder='Contact Number' 
          onChange={getUserData} 
          name='contact' 
          value={user.contact}
        />
        <input 
          placeholder='Age' 
          onChange={getUserData} 
          name='age' 
          value={user.age}
        />
        <input 
          placeholder='City' 
          onChange={getUserData} 
          name='city' 
          value={user.city}
        />
        <button type='submit' onClick={handleSubmit}>Sign Up</button>
      </form>
    </div>
  )
}

export default UserSignup