import React from 'react'
import './WhyChooseUs.css'
import { whyChooseUs } from '../../data'

const WhyChooseUs = () => {
  return (
    <section id='why-choose-us'>
        <div className="overly">
            <div className="section-container">
                {whyChooseUs.map((list, key) => (
                    <div className="flex why-choose-us" key={key}>
                        <div className="flex-center icon">
                            <list.icon />
                        </div>
                        <div className="">
                            <h3 className="title">{list.title}</h3>
                            <p className="text-muted description">{list.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs