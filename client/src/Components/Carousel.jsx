import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/swiper-bundle.css'
import { Navigation, Pagination } from 'swiper'
import carlist from './carlist'
import Carcard from './Carcard'

function Carousel () {
  return (

    <Swiper
      navigation={{
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev'
      }}
      slidesPerView={7}
      spaceBetween={10}
      modules={[Navigation, Pagination]}
      // pagination={{ clickable: true }}
      className='mySwiper'
    >
      {carlist.map(item => (
        <SwiperSlide>
          <Carcard
            name={item.name}
            price={item.price}
            quantity={item.quantity}
          />
        </SwiperSlide>
      ))}

      <div className='slider-button-prev'>  </div>
      <div className='slider-button-next'></div>
      <div className='slider-buffer'></div>
    </Swiper>
    
  )
}

export default Carousel