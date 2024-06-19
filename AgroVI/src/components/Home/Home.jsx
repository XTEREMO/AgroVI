/* eslint-disable no-unused-vars */
import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'



const Home = () => {   
  return (
    <>
        <div className='home-body'>
            <div className='home-body-darkend'></div>
            <div className='home-body-content'>
                <h1>Your New Online Presence with Us</h1>
                <h5>WE ARE TEAM AgroVI, MAKING YOUR LIFE EASY !!!</h5>
                <NavLink className='home-btn' to='/login' >Get Started</NavLink>
            </div>
        </div>
    </>
  )
}

export default Home

