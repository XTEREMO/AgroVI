/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import './LoginSignupStyle.css'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'




const LoginSignupContainer = () => {


  const location = useLocation();
  let toggle = false;

  

  if (location.pathname == '/signup'){
    toggle = false;
  }else{
    toggle = true;
  }
  
  
  
  const renderForm = () => {
    if (location.pathname == '/signup'){
        return <SignupPage />;
    }else{
        return <LoginPage />;
    }
  };







  return (
    <>
        <div className='log-sign-page'>
            <div className='section-left'>
                <h1>AgroVI</h1>
                <p>Our mission is to
                <span> EMPOWER <br/> AGRICULTURAL </span>
                communities with
                <span> KNOWLEDGE </span><br/>
                <span> RESOURCES </span>
                and
                <span> TOOLS </span> 
                for <br/>a prosperous
                <span> FUTURE </span></p>
            </div>
            <div className='section-right'>
                <ul className='form-header-list'>
                    <li className={toggle?'list-item':'list-item popup-btn'}> 
                        <Link className={toggle?'list-Link':'list-Link popup-text'} to="/signup">Sign UP</Link>
                    </li>
                    <li className={toggle?'list-item popup-btn':'list-item'}>
                        <Link className={toggle?'list-Link popup-text':'list-Link'} to="/login">Log IN</Link>
                    </li>
                </ul>
                {renderForm()}
            </div>
        </div>
    </>
  )
}

export default LoginSignupContainer