// import { useState } from 'react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserLogin = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    aadhar: "",
    name: "",
  })

  let name, value
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({...user, [name]: value })    
  }

  const checkLogin = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:4000/user/login', {
      aadhar: user.aadhar,
      name: user.name
    })
    .then(res => {
      console.log(res.data);
      if(res.data.message){
        navigate('/')
      }
    })
    // .then(navigate('/'))
  }

  const backToHome = () => {
    navigate('/')
  }

  const goToSignup = () => {
    navigate('/usersignup')
  }

  return (
    <div className='w-1/2 mx-auto'>
      <form className='flex flex-col'>
        <input 
          placeholder='Aadhar Number'
          onChange={getUserData}
          name='aadhar'
          value={user.aadhar}
          type='number'
        />
        <input 
          placeholder='Name'
          value={user.name}
          onChange={getUserData}
          name='name'
        />
        <button type='submit' onClick={checkLogin}>Login</button>
        <p className='text-center'>OR</p>
        <button onClick={goToSignup}>Sign Up</button>
        <button onClick={backToHome}>Back to Home</button>
      </form>
    </div>
  )
}

export default UserLogin