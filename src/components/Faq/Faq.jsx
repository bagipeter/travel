import React, { useState } from 'react'
import './Faq.css'
import { faq } from '../../data'
import { FaChevronDown } from 'react-icons/fa6'
const Faq = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const handleSelect = (i) => {
        if(activeIndex !== i){
            return setActiveIndex(i);
        }
          setActiveIndex(-1)  
    }
  return (
    <section id='faq'>
        <h1>
            Válaszolunk <spam className="primary">Tedd fel kérdésed</spam>
        </h1>
        <p className="text-muted">Kérdésed fontos számunkra</p>
        <div className="faq-list">
            {faq.map((list, key) => (
                <div className={`faq ${activeIndex === key ? "active" : ""}`}
                onClick={() => handleSelect(key)}
                 key={key}>
                    <div className="flex question">
                        {list.title}
                        <FaChevronDown 
                        className={`icon ${activeIndex === key && "rotate"}`}/>
                    </div>
                    <div className="answer">
                        <div className="answer-wrapper">
                            <p className="text-muted">{list.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Faq