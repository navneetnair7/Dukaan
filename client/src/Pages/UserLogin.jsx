import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Spline from '@splinetool/react-spline'
import '../styles/login.css'

const UserLogin = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
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
      email: user.email,
      password: user.password
    })
    .then(res => {
      console.log(res.data);
      if(res.data.message){
        navigate('/maps/')
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
    <div className='container w-full mt-10'>
      <div className='tag w-auto ml-5'>
        <div className='title'>
          <span className='du'>DU</span>KAAN
        </div>
        <div className='tagline'>
          "Shop Local <span className='tg'>with Us!</span>"
        </div>
      </div>

      <div className='spline w-1/2'>
        <div className='element'>
          <Spline scene='https://prod.spline.design/Ani2FGjlF8QJiSwI/scene.splinecode' />
        </div>
      </div>

      <div className='form w-1/4'>
        <div className='Login'>
          <div className='inp'>
            <h1>Login</h1>
            {/* <div id='username'>Username</div>
            <input type='text' placeholder='Name' className='p-2'></input> */}
            <div>E-mail</div>
            <input type='email' className='h-10 p-2' placeholder="E-mail" id='email' name='email' value={user.email} onChange={getUserData}></input>
            <div>
            <div>Password</div>
            <input type='password' className='p-2 h-10' placeholder='Password' name='password' value={user.password} required onChange={getUserData}></input>
              <button className='login rounded-xl hover:bg-yellow-700' onClick={checkLogin}>LOGIN</button>
              <button className='login rounded-xl hover:bg-yellow-700' onClick={goToSignup}>Sign Up</button>
              <button className='login rounded-xl hover:bg-yellow-700' onClick={backToHome}>Back To Home</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserLogin