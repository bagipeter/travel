import React from 'react'
import './Header.css'
import worldImage from "../../assets/world.svg"
import airplaneImage from "../../assets/airplane.png"
import beachImage from "../../assets/beach.png"
import cityCafeImage from "../../assets/citycafe.png"
import travellerImage from "../../assets/traveller.png"
import { FaStar } from 'react-icons/fa'
import { FaRegStarHalfStroke } from 'react-icons/fa6'
import Partners from '../../components/Partners/Partners'

const Header = () => {
  return (
    <header id="header">
        <div className="world">
          <img src={worldImage} alt="világtérkép" />
        </div>
        <div className="section-container">
            <div className="grid">
                <div className="column">
                    <div className="info">
                        <h1 className="heading">
                            Fedezd fel a világot velünk{" "}
                            <span className="primary">Genashtravel</span>
                        </h1>
                        <p className="text-muted sub-heading">
                            Foglald le a következő utad könnyedén.
                        </p>
                    </div>
                    <div className="airplane">
                        <img src={airplaneImage} alt="repülőgép" />
                    </div>
                </div>
                <div className="column">
                    <div className="bento-grid">
                        <div className="flex grid-item">
                            <div className="item blur flex rating">
                                <h1>4.5</h1>
                                <div>
                                    <div className="stars-containers">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaRegStarHalfStroke />
                                    </div>
                                    <p className="text-muted">
                                        <b>1200</b> értékrlés
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1 item">
                                <img src={beachImage} alt="tengerpart" />
                            </div>
                        </div>
                        <div className="flex grid-item">
                            <div className="item">
                                <img src={cityCafeImage} alt="városkép" />
                            </div>
                            <div className="item">
                                <img src={travellerImage} alt="utazo ember" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Partners />
    </header>

  )
}

export default Header