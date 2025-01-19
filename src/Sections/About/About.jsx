import React, { useEffect, useRef, useState } from 'react'
import 'odometer/themes/odometer-theme-default.css'
import './About.css'
import travellerMaleImg from '../../assets/traveller-male.png'
import hotelImg from '../../assets/hotel.png'
import travelcruiseShipImg from '../../assets/cruiseship.png'
import { GiWorld } from 'react-icons/gi'
import Odometer from 'react-odometerjs'
import { TbBrandBooking, TbUsersGroup } from 'react-icons/tb'
import { RiHotelLine } from 'react-icons/ri'

const About = () => {

  const [destinations, setDestinations] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [bookings, setBookings] = useState(0);
  const [hotels, setHotels] = useState(0);
  const achivmentRef =  useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting){
          setTimeout(() => {
            setDestinations(60);
            setCustomers(809);
            setBookings(8500);
            setHotels(500)
          }, 1000)
        }
      })
    })
    observer.observe(achivmentRef.current)
  }, [])
  return (

    <section id='about'>
        <div className="section-container">
            <div className="bento-grid">
                <div className="grid-item">
                    <img src={travellerMaleImg} alt="utazo férfi" />
                </div>
                <div className="grid-item">
                  <div className="item">
                    <img src={hotelImg} alt="hotel illusztráció" />
                  </div>
                  <div className="item">
                    <img src={travelcruiseShipImg} alt="hajó illusztráció" />
                  </div>
                </div>
            </div>
            <div>
              <h3 className="primary">Rólunk</h3>
              <h2>Mi hiszünk</h2>
              <p className="text-muted">Az utazás csodáiban
                és tudjuk hogy új dolgokat mindig öröm felfedezni
              </p>
              <div className="achivments" ref={achivmentRef}>

                <div className="blur achivment">
                  <div className="flex-center icon">
                    <GiWorld />
                  </div>
                  <div className="flex-center">
                    <Odometer value={destinations} className='title'/>
                    <h3 className="title">+</h3>
                  </div>
                  <p className="text-muted">Uticélok</p>
                </div>

                <div className="blur achivment">
                  <div className="flex-center icon">
                    <TbUsersGroup />
                  </div>
                  <div className="flex-center">
                    <Odometer value={customers} className='title'/>
                    <h3 className="title">+</h3>
                  </div>
                  <p className="text-muted">Elégedett ügyfél</p>
                </div>

                <div className="blur achivment">
                  <div className="flex-center icon">
                    <TbBrandBooking />
                  </div>
                  <div className="flex-center">
                    <Odometer value={bookings} className='title'/>
                    <h3 className="title">+</h3>
                  </div>
                  <p className="text-muted">Foglalás</p>
                </div>

                <div className="blur achivment">
                  <div className="flex-center icon">
                    <RiHotelLine />
                  </div>
                  <div className="flex-center">
                    <Odometer value={hotels} className='title'/>
                    <h3 className="title">+</h3>
                  </div>
                  <p className="text-muted">Luxus Hotel</p>
                </div>


              </div>
            </div>
        </div>
    </section>
  )
}

export default About