import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/climate.jpg'
import AVTR2 from '../../assets/climate1.jpg'
import AVTR3 from '../../assets/climate2.jpg'


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
           
      >
        <SwiperSlide   className="testimonial">
          <div className="client__avatar">
            <img src ={AVTR1} alt="Avatar One"/>
          </div>
            <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit . Iusto quood nam impedit solute
              odio possimus! Ques sint dignissimos distinctio alias rerum laborum aperian minus
              pariatur,totam dicta, repellendus a voluptatibus!
            </small>
          
        </SwiperSlide>

       
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src ={AVTR2} alt="Avatar One"/>
          </div>
            <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit . Iusto quood nam impedit solute
              odio possimus! Ques sint dignissimos distinctio alias rerum laborum aperian minus
              pariatur,totam dicta, repellendus a voluptatibus!
            </small>
          
        </SwiperSlide>


        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src ={AVTR3} alt="Avatar One"/>
          </div>
            <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit . Iusto quood nam impedit solute
              odio possimus! Ques sint dignissimos distinctio alias rerum laborum aperian minus
              pariatur,totam dicta, repellendus a voluptatibus!
            </small>
          
        </SwiperSlide>


      </Swiper>
    </section>
  )
}

export default testimonials