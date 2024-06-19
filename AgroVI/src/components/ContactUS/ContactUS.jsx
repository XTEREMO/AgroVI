/* eslint-disable no-unused-vars */
import React from 'react'
import './ContactUS.css'
import smsLogo from '../res/sms-logo.png'
import callLogo from '../res/call-logo.png'

const ContactUS = () => {    
  return (
    <>
      <div className='contact-body'>
            <div className='contact-box'>
                <h2>NEED HELP ?</h2>
                <p>We open the door to thousands of farmers woldwide.Ask your queries and get the best solution instantlt.</p>
                <div className='contact-info'>
                  <div className='contact-card'>
                    <img src={smsLogo} alt='call' />
                    <div className='call-sec'>
                      <p>Give Us a call</p>
                      <a href='#'>8100041785</a>
                    </div>
                  </div>
                  <div className='contact-card'>
                    <img src={callLogo} alt='massage' />
                    <div className='text-sec'>
                      <p>Drop your query</p>
                      <a href='#'>here to get SMS</a>
                    </div>
                  </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default ContactUS