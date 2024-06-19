/* eslint-disable no-unused-vars */
import React from 'react'
import{ NavLink } from 'react-router-dom';
import './Navbar.css'
import status from '../../../server/userLoginStatus'
const TopNavbar = () => {
  return (
    <>
        <div className='top-navbar'>
            <div className='top-navbar-logo'>
                <h1>AgroVI</h1>
            </div>
            <ul className='top-navbar-menu'>
                <li>
                    <NavLink className='top-navbar-menu-item'  to="/">HOME</NavLink>
                </li>

                <li>
                    <NavLink className='top-navbar-menu-item' to="/about">ABOUT</NavLink>
                </li>
                
                <li className={status.state ? "":"hide"}>
                    <NavLink className='top-navbar-menu-item' to="/crop-recommendation">RECOMMENDATION</NavLink>
                </li>
                
                <li className={status.state ? "":"hide"}>
                    <NavLink className='top-navbar-menu-item' to="/disease-detection">DISEASE</NavLink>
                </li>
                
                <li className={status.state ? "":"hide"}>
                    <NavLink className='top-navbar-menu-item' to="/weather">WEATHER</NavLink>
                </li>
                <li>
                    <NavLink className='top-navbar-menu-item' to="/contact">CONTACT US</NavLink>
                </li>
                <li>
                    <NavLink className='top-navbar-menu-item' to="/signup">SIGN UP</NavLink>
                </li>
                <li>
                    <NavLink className='top-navbar-menu-item' to="/login">LOG IN</NavLink>
                </li>
            </ul>
        </div>
    </>
  )
}

export default TopNavbar