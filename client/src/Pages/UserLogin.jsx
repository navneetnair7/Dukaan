import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Spline from '@splinetool/react-spline'

const UserLogin = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    password: ""
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
      name: user.name,
      password: user.password
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
    <div className='w-full h-screen overflow-y-hidden overflow-x-hidden flex bg-yellow-100'>
      <div className='w-full translate-x-10'>
        <Spline scene='https://prod.spline.design/aiowdFvEJi7hIOX6/scene.splinecode' />
      </div>
      <div className='mx-auto my-auto w-full'>
        <div className='flex justify-center items-center'> 
            <div className='bg-white w-1/2 h-96 rounded-lg'>
                <div className='flex justify-center items-center flex-col'>
                    <div>
                        <img alt = "logo" />
                        <h2 className='text-center pt-12 text-xl'>Sign in to your account</h2>
                    </div>
                    <div className='pt-8 px-24'>
                        <form>
                            <label>Username</label>
                            <input 
                                name = "name"
                                className='w-full border border-zinc-500 py-1 rounded-md'
                                onChange={getUserData}
                            />
                            <label>Password</label>
                            <input 
                                name = "password"
                                className='w-full border border-zinc-500 py-1 rounded-md'
                                onChange={getUserData}
                                type='password'
                            />
                            <div className='flex flex-col pt-2'>
                              <button className='bg-blue-400' onClick={checkLogin}>Sign In</button>
                              <button className='bg-blue-400 mt-2' onClick={goToSignup}>Sign Up</button>
                              <button className='bg-blue-400 mt-2' onClick={backToHome}>Back To Home</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default UserLogin