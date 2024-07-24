/* eslint-disable no-unused-vars */
import React, { useState,useContext,createContext } from 'react'
//Style sheet for Crop Recommandation
import './CropRecommandation.css'

//Function Modules
import CropRecommandationHandeler from './modules/CropRecommandationHandeler'



// Create Context for CropRecommandation
const CropRecommandationContext = createContext();


// eslint-disable-next-line react/prop-types
const CropRecommandation = ({ children }) => {
  const [predicted,setPredicted ] = useState("")
  return (
    <CropRecommandationContext.Provider value={{ predicted,setPredicted }}>
      <div className='crop-pred-box'>        
        {
          predicted == "" ? <Form/> : <Predict/> 
        }    
      </div>
    </CropRecommandationContext.Provider>
  )
}

export default CropRecommandation



// From function...........................................................................................
const Form = ()=>{
  const [cropRecommandationData,setCropRecommandationData] = useState({
    nitrogen:"",
    phosphorus:"",
    potassium:"",
    humidity:"",
    temparature:"",
    rainfall:"",
    ph:""
  })
  const setInputData=(e)=>{
    const { name,value } = e.target
    setCropRecommandationData({...cropRecommandationData,[name]:value})
  }

  const { predicted,setPredicted } = useContext(CropRecommandationContext)
  return (
    <form className="crop-pred-form" onSubmit={async(e) => setPredicted( await CropRecommandationHandeler(e,cropRecommandationData) )}>
            <p>Predict the best crop to plant</p>
              <input type="text" value={cropRecommandationData.nitrogen} name='nitrogen' placeholder="Enter the value of Nitrogen" onChange={setInputData}/>
              <input type="text" value={cropRecommandationData.phosphorus} name='phosphorus' placeholder="Enter the value of Phosphorus" onChange={setInputData}/>
              <input type="text" value={cropRecommandationData.potassium} name='potassium' placeholder="Enter the value of Potassium" onChange={setInputData}/>
              <input type="text" value={cropRecommandationData.ph} name='ph' placeholder="Enter the soil ph value (0-14)" onChange={setInputData}/>
              <input type="text" value={cropRecommandationData.rainfall} name='rainfall' placeholder="Enter the rainfall gauge (in mm)" onChange={setInputData}/>
              <input type="text" value={cropRecommandationData.temparature} name='temparature' placeholder="Enter the temparature" onChange={setInputData}/>
              <input type="text" value={cropRecommandationData.humidity} name='humidity' placeholder="Enter the humidity" onChange={setInputData}/>
              <button> Get Crop Recommendation </button>
    </form>
  )
}

//Predicted Value function ..............................................................................................................
const Predict = ()=>{
  const { predicted,setPredicted } = useContext(CropRecommandationContext)
  return (
    <div className='crop-pred-details'>
      <h1>{predicted.crop_name}</h1>
      <p style={{width:'60vw'}}>{predicted.crop_details}</p>
      <div style={{width:'60vw'}}>
        <p><b>Seeding time</b> - {predicted.time_of_seeding}</p>
        <p><b>Harvesting time</b> - {predicted.time_of_harvesting}</p>
      </div>
      <div style={{width:'60vw'}}>
          <h4>Soil compositions </h4>
          <p><b>PH - </b>{predicted.soil_component.pH} , <b>Nitrogen - </b>{predicted.soil_component.nitrogen} , <b>Phosphorus - </b>{predicted.soil_component.phosphorus} , <b>Potassium - </b>{predicted.soil_component.potassium} , <b>Organic Matter - </b>{predicted.soil_component.organic_matter} </p>
      </div>
      <div style={{width:'60vw'}}>
        <p><b>Temparature</b> - {predicted.air_conditions}</p>
        <p><b>Weather</b> - {predicted.weather}</p>
        <p><b>Season</b> - {predicted.season}</p>
      </div>
      <button className='crop-pred-btn' onClick={(e)=>setPredicted("")}> OK </button>
    </div>
  )
}