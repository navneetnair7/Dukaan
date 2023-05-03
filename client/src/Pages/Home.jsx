import React from 'react'
import Catcard from "../Components/Catcard";
import Spline from '@splinetool/react-spline';
import Carousel from "../Components/Carousel"
import '../styles/index.css'
import { useState, useEffect } from 'react';
import axios from 'axios'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom';

function Home () {
  const navigate = useNavigate()
  const initialCategory = [{
    Name: "",
    NumberOfItems: 0,
    Image: ""
  }]
  const [ categories, setCategories ] = useState(initialCategory)

  const getCategories = () => {
    axios.get('http://localhost:4000/categories')
      .then(res => {
        setCategories(res.data);
      })
  }

  useEffect((e) => {
    // e.preventDefault()
    getCategories()
  }, [])

  return (
    <div className='Landing'>
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
            <img src='/images/cart.jpeg'></img>
            Cart
          </button>
          <button className='profile' onClick={(e) => {e.preventDefault()
          navigate('/usersignup')}}>
            <img src='/images/profile.png'></img>
              Login
          </button>
        </div>
        <div className='inner-div'>
          <div className='inner-nav'>
            <div className='nav-item'>
            <img  className="discount-spline" src='/images/discounts.png'></img>
              Offers
            </div>
            <div className='nav-item'>
            <img  className="discount-spline" src='/images/announcements.png'></img>
              Announcements
            </div>
            <div className='nav-item'>
            <img  className="discount-spline" src='/images/leaf.png'></img>
            Eat-Healthy
            </div>
          </div>
          <div className='driver'>
            <div className='d-content'>
              <span id="title">' Verified Stores '</span><br></br>
              <div className='verified'> <Spline scene="https://prod.spline.design/nUyZpcIJU3m3QP3v/scene.splinecode" /></div>
               <div id="disc"> because we Care</div> 
            </div>
            <div className="d-spline">  <Spline scene="https://prod.spline.design/KqT0GG1ZNuZBCGEs/scene.splinecode" /></div>
          </div>
          <button className='explore'>EXPLORE</button>
        </div>
      </div>
      <div className='g-made'>
        <div className='g-banner'>
          <img src='/images/1.png'></img>
        </div>
        <div className='g-banner'>
          <img src='/images/2.png'></img>
        </div>
        <div className='g-banner'>
          <img src='/images/3.png'></img>
        </div>
      </div>
      <div className='Bottom'>
        <div className='buffer'></div>
        <div className='categories'>
          {
            categories.map(x=>
              <Catcard name={x.Name}/>)
          }
        </div>
          <div className='carousel-holder mb-8'>
              <h1 className='text-4xl'>Breakfast & Dairy</h1>
                <Carousel/>
          </div>
          <div className='carousel-holder mb-8'>
              <h1 className='text-4xl'>Breakfast & Dairy</h1>
                <Carousel/>
          </div>
          <div className='carousel-holder'>
              <h1 className='text-4xl'>Breakfast & Dairy</h1>
                <Carousel/>
          </div>
          <div className='carousel-holder'>
              <h1 className='text-4xl'>Breakfast & Dairy</h1>
                <Carousel/>
          </div>
          <Footer />
      </div>
    </div>
    
  )
}

export default Home