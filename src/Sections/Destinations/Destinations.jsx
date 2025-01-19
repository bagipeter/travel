import React, { useCallback, useRef } from 'react'
import 'swiper/css';
import './Destinations.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { popularDestinations } from '../../data'
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import { LuHotel } from 'react-icons/lu';
import { BsAirplaneEngines } from 'react-icons/bs';
import { TbReportMoney } from 'react-icons/tb';



const Destinations = () => {

    const slideRef = useRef() ;

    const handlePrev = useCallback(() => {
        if(!slideRef.current) return;
        slideRef.current.swiper.slidePrev()
    }, [])

    const handleNext = useCallback(() => {
        if(!slideRef.current) return;
        slideRef.current.swiper.slideNext()
    }, [])
  return (

    <section id="destinations">
        <div className="section-container">
            <div className="section-header">
            <h2>Hová Szeretnél</h2>
                <h1>Utazni Következőnek?</h1>
                <p className="description">
                    Fedezd fel a világot és élj át életre szoló kalandokat.
                </p>
            </div>
            <Swiper 
                slidesPerView={1} spaceBetween={20} grabCursor={true}
                breakpoints={{
                600: {slidesPerView: 2},
                900: {slidesPerView: 4},
                }}
                className='destinations'
                ref={slideRef}>
                     <div className="flex-center slide-button prev-button"
                        onClick={handlePrev}>
                            <FaChevronLeft />
                     </div>
                    <div className="flex-center slide-button next-button"
                        onClick={handleNext}>
                            <FaChevronRight />
                    </div>
                {popularDestinations.map((destination, key) => (
                    <SwiperSlide className='bliur destination' key={key}>
                        <img src={destination.image} alt="kép az Eifel toronyról"/>
                        <div className="flex-center blur rating">
                        <h2>{destination.rating}</h2>
                            <div className="star">
                                <FaStar />
                            </div>
                        </div>
                        <div className="preview-box">
                            <h1 className="country">{destination.country}</h1>
                            <p className="title">{destination.title}</p>
                        </div>
                        <div className="details-box">
                            <div className="flex detail-item">
                                <div className="flex-center icon">
                                  <LuHotel />
                                </div>
                                <div>
                                    <h4>{destination.hotels_number}</h4>
                                    <p className="text-muted">Hotel</p>
                                </div>
                            </div>
                            <div className="flex detail-item">
                                <div className="flex-center icon">
                                  <BsAirplaneEngines />
                                </div>
                                <div>
                                    <h4>{destination.flights_number}</h4>
                                    <p className="text-muted">Repülő</p>
                                </div>
                            </div>
                            <div className="flex detail-item">
                                <div className="flex-center icon">
                                  <TbReportMoney />
                                </div>
                                <div>
                                    <h4>{destination.price}</h4>
                                    <p className="text-muted">Prémium szolgáltatás</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex-center bottom-container">
                <a href="#" className='btn btn-primary'>Minden uticél</a>
            </div>
        </div>
    </section>
  )
}

export default Destinations