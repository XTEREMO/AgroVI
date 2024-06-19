/* eslint-disable no-unused-vars */
import React from 'react'
import './CropRecommandation.css'
const CropRecommandation = () => {
  return (
    <>
      <div className='crop-pred-box'>
        <div className="crop-pred-form">
            <p>Predict the best crop to plant</p>
            <input type="text" placeholder="Enter the value of nitrogen"/>
            <input type="text" placeholder="Enter the value of Phosphorus" />
            <input type="text" placeholder="Enter the value of Potassium" />
            <input type="text" placeholder="Enter the soil ph value (0-14)" />
            <input type="text" placeholder="Enter the rainfall gauge (in mm)" />
            <input type="text" placeholder="Enter the temparature" />
            <button  type="button"> Get Crop Recommendation </button>
        </div>
      </div>
    </>
  )
}

export default CropRecommandation