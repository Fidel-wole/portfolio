import React from 'react'
import './testimonials.css'
import AVA1 from '../../assets/meabout.png'
import {Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
          modules={[ Pagination,  A11y]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
      >
        
         <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVA1} alt="Avatar One"/>
            </div>
            <h5 className='client__name'>Eliab Ilemobayo</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Similique, obcaecati ratione consequuntur 
              delectus harum ab magni ducimus tempora accusantium quod doloremque 
              ullam beatae illo sunt optio. In quidem similique reiciendis!
            </small>
          
         </SwiperSlide>
         <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVA1} alt="Avatar One"/>
            </div>
            <h5 className='client__name'>Eliab Ilemobayo</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Similique, obcaecati ratione consequuntur 
              delectus harum ab magni ducimus tempora accusantium quod doloremque 
              ullam beatae illo sunt optio. In quidem similique reiciendis!
            </small>
          
         </SwiperSlide>
         <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVA1} alt="Avatar One"/>
            </div>
            <h5 className='client__name'>Eliab Ilemobayo</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Similique, obcaecati ratione consequuntur 
              delectus harum ab magni ducimus tempora accusantium quod doloremque 
              ullam beatae illo sunt optio. In quidem similique reiciendis!
            </small>
          
         </SwiperSlide>
         <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVA1} alt="Avatar One"/>
            </div>
            <h5 className='client__name'>Eliab Ilemobayo</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Similique, obcaecati ratione consequuntur 
              delectus harum ab magni ducimus tempora accusantium quod doloremque 
              ullam beatae illo sunt optio. In quidem similique reiciendis!
            </small>
          
         </SwiperSlide>
         <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVA1} alt="Avatar One"/>
            </div>
            <h5 className='client__name'>Eliab Ilemobayo</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Similique, obcaecati ratione consequuntur 
              delectus harum ab magni ducimus tempora accusantium quod doloremque 
              ullam beatae illo sunt optio. In quidem similique reiciendis!
            </small>
          
         </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials