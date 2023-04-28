import React from 'react'

const Navbar = () => {
  return (
    <div className='Top'>
      <div className='nav'>
          <div className='logo'>
            <span style={{ color: 'white' }}>DU</span>KAAN
          </div>
          <div className='search'>
          <img className='search-icon' src="/images/search.png"></img>
          <input className='search-bar pl-5' placeholder='Search'></input>
          </div>
          
          <button className='cart'>
            <img src='/images/cart.png'></img>
            Cart
          </button>
          <button className='profile'>
            <img src='/images/profile.png'></img>
            Profile
          </button>
        </div>
    </div>
  )
}

export default Navbar