import React from 'react'

function Footer () {
  return (
    <div className='foot-container'>
      <div className='footlinks'>
        <h1>
          <span>DU</span>KAAN
        </h1>
        <div className='socials'>
          <div className='social-icons'>
            <img src='../images/instagram.png' alt='insta'></img>
          </div>
          <div className='social-icons'>
            <img src='../images/facebook.png' alt='facebook'></img>
          </div>
          <div className='social-icons'>
            <img src='../images/twitter.png' alt='twitter'></img>
          </div>
          <div className='social-icons'>
            <img src='../images/linkedin.png' alt='linkedin'></img>
          </div>
        </div>
        <div className='copyright'>&copy; YGN Private Limited</div>
      </div>
      <div className='links'>
        <p>Home</p>
        <p>Delivery Address</p>
        <p>Careers</p>
        <p>Press</p>
        <p>Customer Support</p>
      </div>
      <div className='links'>
        <p>Privacy</p>
        <p>Terms of Use </p>
        <p>Responsible Disclosure Policy</p>
      </div>
      <div className='download'>
        <p>Download App</p>
        <button>
          <img
            className='download-icons'
            src='../images/google-play.png' alt='google'
          ></img>
          Get it on Play Store
        </button>
        <button>
          <img
            className='download-icons'
            src='../images/app-store.png'
            alt='appstore'
          ></img>
          Get it on App Store
        </button>
      </div>
    </div>
  )
}
export default Footer