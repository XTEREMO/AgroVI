/* eslint-disable no-unused-vars */
import React from 'react'
import './About.css'
import logo from '../res/logo.png'
import cropPredIcon from '../res/crop-recom.png'
import weatherIcon from '../res/weather.png'
import cropDiseaseIcon from '../res/crop-des.png'
import cropTreadIcon from '../res/crop-tread.png'
const About = () => {   
  return (
    <>
      <div className='about-body'>
              <div className='sec sec-1'>
                      <div className='about-left'>
                        <h1>ABOUT US</h1>
                        <h6>
                        Welcome to AgroVI, your comprehensive companion for modern farming.
                        Designed with the needs of farmers in mind, our app leverages 
                        cutting-edge technology to enhance agricultural practices, 
                        boost productivity, and ensure sustainability. 
                        </h6>
                      </div>
                      <div className='about-right'>
                        <img src={logo} alt='AgroVI' className='image-1'/>
                      </div>
              </div>



              <div className='sec sec-2'>
                      <div className='about-left'>
                      <img src={cropPredIcon} alt='AgroVI' className='image-2'/>
                      </div>
                      <div className='about-right'>
                        <h3> Crop Recommendation </h3>
                        <h6>
                          Make informed decisions about what to plant with our Crop Recommendation feature. Based on soil type, weather conditions, and historical data, our app provides personalized crop suggestions to optimize yield and profitability. Get the right crop for the right season, tailored specifically for your farm’s unique characteristics.
                        </h6>
                      </div>
              </div>


              
              <div className='sec sec-3'>
                      <div className='about-left'>
                          <h3>Trading</h3>
                              <h6>
                              Easily connect with buyers and sellers through our Treading feature. Our platform facilitates seamless transactions, ensuring you get the best prices for your produce. Stay updated with market trends, manage your inventory, and streamline your sales process all in one place.
                              </h6>
                      </div>
                      <div className='about-right'>
                          <img src={cropTreadIcon} alt='AgroVI' className='image-3'/>
                      </div>
              </div>



              <div className='sec sec-4'>
                      <div className='about-left'>
                      <img src={cropDiseaseIcon} alt='AgroVI' className='image-4'/>
                      </div>
                      <div className='about-right'>
                      <h3>Disease</h3>
                        <h6>
                        Protect your crops from potential threats with our advanced Disease Prediction tool. Using machine learning algorithms and real-time data, our app predicts the likelihood of disease outbreaks, enabling you to take proactive measures. Early detection means healthier crops and reduced losses.
                        </h6>
                      </div>
              </div>



              <div className='sec sec-5'>
                      <div className='about-left'>
                      <h3>Weather</h3>
                              <h6>
                              Stay ahead of the weather with our accurate and timely Weather Update feature. Receive daily forecasts, severe weather alerts, and long-term climate trends tailored to your location. Make strategic farming decisions based on reliable weather information, from planting to harvesting.
                              </h6> 
                      </div>
                      <div className='about-right'>
                        <img src={weatherIcon} alt='AgroVI' className='image-5'/>
                      </div>
              </div>


                <div className="sec-6">
                  <h6>At AgroVI, we are committed to empowering farmers with the tools they need to thrive in todays agricultural landscape. Join our community and take your farming to the next level with technology that works for you.</h6>
                </div>
    </div>
    </>
  )
}

export default About