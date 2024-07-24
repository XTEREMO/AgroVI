/* eslint-disable no-unused-vars */
import React from 'react'
import{ NavLink } from 'react-router-dom';
import './Navbar.css'
const TopLoggedNavbar = () => {
    return (
        <>
            <div className='top-navbar'>
                <div className='top-navbar-logo'>
                    <h1>AgroVI</h1>
                </div>
                <ul className='top-navbar-menu'>
                    <li>
                        <NavLink className='top-navbar-menu-item'  to="/feed">News</NavLink>
                    </li>
                    <li>
                        <NavLink className='top-navbar-menu-item'  to="/crop-recommendation">RECOMMENDATION</NavLink>
                    </li>
                    <li>
                        <NavLink className='top-navbar-menu-item' to="/disease-detection">DISEASE</NavLink>
                    </li>
                    <li>
                        <NavLink className='top-navbar-menu-item'  to="/weather">WEATHER</NavLink>
                    </li>
                    <li>
                        <NavLink className='top-navbar-menu-item'  to="/profile">Profile</NavLink>
                    </li>
                </ul>
            </div>
        </>
      )
}

export default TopLoggedNavbar


