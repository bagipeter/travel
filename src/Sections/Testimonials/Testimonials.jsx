import React from 'react'
import 'swiper/css'
import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import {testimonials} from '../../data'
import { FaStar } from 'react-icons/fa'
import { Autoplay } from 'swiper/modules'

const Testimonials = () => {
  return (
    <section id='testimonials'>
        <div className="section-header">
            <h2>Rólunk mondták</h2>
            <h1>Az elégedett utazók</h1>
        </div>
        <Swiper
            slidesPerView={1} 
            spaceBetween={30} 
            autoplay={true}
            loop={true} speed={500} 
            centeredSlides={true}
            modules={[Autoplay]}
            breakpoints={{
                600: {slidesPerView: "auto"},
                }}
                className='testimonials'
           
        >
            {testimonials.map((list, key) => (
                <SwiperSlide className='testimonials' key={key}>
                    <div className="flex user">
                        <div className="profile">
                          <img src={list.profile} alt={list.name} />
                        </div>
                        <div className="details">
                            <h3 className="name">{list.name}</h3>
                            <div className="flex row">
                                <p className="text-muted position">{list.position}</p>
                                <p className="primary company">{list.company}</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-muted content">{list.content}</div>
                    <div className="flex-center stars-container">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

    </section>
  )
}

export default Testimonials