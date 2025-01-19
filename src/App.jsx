import React from 'react'
import Navbar from './Sections/Navbar/Navbar'
import Header from './Sections/Header/Header'
import Services from './Sections/Services/Services'
import Destinations from './Sections/Destinations/Destinations'
import About from './Sections/About/About'
import WhyChooseUs from './Sections/WhyChooseUs/WhyChooseUs'
import Testimonials from './Sections/Testimonials/Testimonials'
import Concatct from './Sections/Concatct/Concatct'

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Destinations />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <Concatct />
      {/* Egy utazási iroda honlapját késszítettem el */}
        
    </>
  )
}

export default App