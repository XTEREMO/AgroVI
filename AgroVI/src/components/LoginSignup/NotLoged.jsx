/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'
import './NotLoged.css'

const NotLoged = () => {
  return (
    <>
        <div className='not-loged-body'>
            <div className='not-loged-box'>
                <h2>You Need to Login or Signp to Access this page</h2>
                <NavLink className='go-to-login' to='/login' >Get Started</NavLink>
            </div>
        </div>
    </>
  )
}

export default NotLoged