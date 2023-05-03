import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserSignup = () => {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
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
    await axios.post('http://localhost:4000/user/', {
      name: user.name,
      email: user.email,
      password: user.password,
      contact: user.contact,
      city: user.city
    }).then(navigate(`/maps/${user.name}`))
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-bold mb-8">Signup</h1>
      <form className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={(e) => getUserData(e)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email ID</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={(e) => getUserData(e)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={(e) => getUserData(e)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contactNo" className="block text-gray-700 font-bold mb-2">Contact No</label>
          <input
            type="tel"
            id="contactNo"
            name="contact"
            value={user.contact}
            onChange={(e) => getUserData(e)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-700 font-bold mb-2">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={user.city}
            onChange={(e) => getUserData(e)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className='flex justify-between'>
        <button onClick={handleSubmit} className='h-10 w-1/2 mr-5 mx-auto rounded-lg border border-ouryellow'>Sign In</button>
        <button onClick={(e) => {e.preventDefault() 
        navigate('/userlogin')}} className='h-10 w-1/2 mx-auto rounded-lg border border-ouryellow'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default UserSignup