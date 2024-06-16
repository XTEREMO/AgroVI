/* eslint-disable no-unused-vars */
import React from 'react'
import { Routes,Route } from 'react-router-dom';
/*PAGE  COMPONENTS...............................*/
import MainPage from './page/MainPage';
import LogSign from './page/LogSign';


const App = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LogSign />} />
    </Routes>
    </>
  )
}

export default App