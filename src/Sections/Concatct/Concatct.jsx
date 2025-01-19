import React from 'react'
import './Concatct.css'
import Faq from '../../components/Faq/Faq'
import {contactInfo} from '../../data'

const Concatct = () => {
  return (
    <section id='contact'>
        <div className="section-container">
            <Faq />
            <div className="column">
                <form className="concat-form">
                    <h3>Kérdésed van?</h3>
                    <h2 className="primary">Ahol elérsz bennünket</h2>
                    <div className="flex row">
                       <input
                        type="text"
                         placeholder='V.Név' 
                         name='firstname'
                         className='control' /> 
                         <input
                        type="text"
                         placeholder='K.Név' 
                         name='lasttname'
                         className='control' /> 
                    </div>
                    <div className="flex row">
                        <input 
                        type="email"
                        name="email"
                        placeholder='Email'
                        className='control'
                          />
                        <input 
                        type="tel"
                        name="phone"
                        placeholder='Tel.'
                        className='control'
                          />
                    </div>
                    <textarea 
                    name="message"
                     placeholder='Üzenet'
                      className='control'></textarea>
                    <button type="button" className='control submit-btn'>Küldés</button>
                </form>
                <div className="contact-options">
                    {contactInfo.map((info, key) => (
                        <div className="flex option" key={key}>
                            <div className="flex-center icon">{info.icon}</div>
                            <div className="details">
                                <h2>{info.name}</h2>
                                <p className="text-muted value">{info.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Concatct