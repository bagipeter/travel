import React from 'react'
import './Logo.css'
import logo from '../../assets/logo.svg'
const Logo = () => {
  return (
    <div className="flex-center logo">
        <img src={logo} alt="logo" />
        <h1 className="">GaneshTravel</h1>
    </div>
  )
}

export default Logo