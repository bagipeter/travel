import React, { useEffect, useState } from 'react'
import './Navbar.css'
import Logo from '../../components/Logo/Logo'
import { FaChevronDown } from 'react-icons/fa'
import {services} from '../../data'
import tripImage from "../../assets/trip-map.png"
import { TiThMenu } from 'react-icons/ti'
import ThemeToggle from '../../components/ThemeToogle/ThemeToggle'
const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);

    const toggleNav = () => {
        if (window.scrollY > 100){
            setShowNavbar(true);
        }else{
            setShowNavbar(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleNav);
        return () => window.removeEventListener("scroll", toggleNav)

    }, [])
    

  return (
   <>
   {showSidebar && <div
   className='sidebar-overly'
   onClick={() => setShowSidebar(!showSidebar)}
    />}
   <nav className={`flex navbar ${showNavbar && "blur drop"}`}>
    <Logo/>
    <ul className={`flex navigation
    ${showSidebar && "show"}`
    }>
        <li className="flex-center nav-item">
            <a href="#header" className="flex nav-link">Főoldal</a>
        </li>

        <li className="flex-center nav-item">
            <a href="#services" className="flex nav-link">Szolgáltatások
            <FaChevronDown className='chevron-icon' />
            </a>
            <div className="nav-drop">
                <div className="blur drop-wrapper">
                    <div className="column left-column">
                        <h2>Kiemelt szolgáltatások</h2>
                        <div>
                            {services.map((service, key) => (
                                <div className='flex services' key={key}>
                                    <div className="icon">
                                        <service.icon />
                                    </div>
                                    <div>
                                        <h4>{service.title}</h4>
                                        <p className="text-muted line-clamp-1">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="column">
                        <p className="text-muted">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            dae doloribus numquam consectetur!
                        </p>
                        <a href="#services" className='btn btn-primary'>Minden szolgáltatás</a>
                        <a href="#about" className='btn'>Rólunk</a>
                        <div className="drop-image">
                            <img src={tripImage}/>
                        </div>
                    </div>
                </div>
            </div>
        </li>

        <li className="flex-center nav-item">
            <a href="#destinations" className="flex nav-link">Célállomások</a>
        </li>

        <li className="flex-center nav-item">
            <a href="#about" className="flex nav-link">Rolunk</a>
        </li>

        <li className="flex-center nav-item">
            <a href="#why-choose-us" className="flex nav-link">Ajánlások</a>
        </li>

        
        <li className="flex-center nav-item">
            <a href="#contact" className="flex nav-link">Kapcsolat</a>
        </li>
    </ul>
    <div className="flex-center btn-wrapper">
        <ThemeToggle />
        <a href="#" className='btn btn-primary get-started'>Felfedezés</a>

        <a href="#" className='btn signin-btn'>Belépés</a>

        <div className="flex-center menu"
        onClick={() => setShowSidebar(!showSidebar)}>
            <TiThMenu />
        </div>
    </div> 
   </nav>
   </>
  )
}

export default Navbar