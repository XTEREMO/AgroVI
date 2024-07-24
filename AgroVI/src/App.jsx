/* eslint-disable no-unused-vars */
import React,{ useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import TopNavbar from './components/Nabvar/TopNavbar'
import Home from './components/Home/Home'
import LoginSignupContainer from './components/LoginSignup/LoginSignupContainer'
import About from './components/About/About'
import ContactUS from './components/ContactUS/ContactUS'
import NotLoged from './components/LoginSignup/NotLoged'
import { useLocation } from 'react-router-dom'
import CropRecommandation from './components/CropRecommendation/CropRecommandation'
import DiseaseDetection from './components/DiseaseDetection/DiseaseDetection'
import Weather from './components/Weather/Weather'
import TopLoggedNavbar from './components/Nabvar/TopLoggedNavbar'
import './App.css'
import { AppContext } from '../Context/AppContext'
const App = () => {
  const location = useLocation();

  const {
    appState:{loginStatus},
  } = useContext(AppContext);



  const checkStatus = (e)=>{
    if(!loginStatus) return <NotLoged />
    else{
      if(location.pathname == '/crop-recommendation'){
        return <CropRecommandation/>
      }
      if(location.pathname == '/disease-detection'){
        return <DiseaseDetection />
      }
      if(location.pathname == '/weather'){
        return <Weather />
      }
    }
  }
  return (
    <>
        { loginStatus ? <TopLoggedNavbar/> : <TopNavbar /> }
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/crop-recommendation' Component={checkStatus}/>
          <Route path='/disease-detection' Component={checkStatus}/>
          <Route path='/weather' Component={checkStatus}/>
          <Route path='/contact' element={<ContactUS/>}/>
          <Route path='/login' element={<LoginSignupContainer/>}/>
          <Route path='/signup' element={<LoginSignupContainer/>}/>
        </Routes>
    </>
  )
}

export default App