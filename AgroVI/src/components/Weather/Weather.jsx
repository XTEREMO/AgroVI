/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState,useRef,useContext,createContext } from 'react'
import './Weather.css'



//APIs funcctions......................................................
import { fetchWeatherApi,fetchCityApi } from './WeatherApi';


//Icons................................................................
import icons  from '../../res/IconModule';
const {search,temp,pressure,info,surPressure,rain,snow,wind,direction,cloud} = icons

//Component...........................................................
import AltitudeMassage from './AltituteMassage';



const weatherContext = createContext();

const Weather = (e) => {
  const [ apiData,setApiData ] = useState(null);
  const [ envData,setEnvData ] = useState(null);
  

  

  useEffect( ()=>{
    const fetchData = async() => {
      const {weatherResponse, forcastResponse}= await fetchWeatherApi()
      setEnvData(forcastResponse)
      setApiData(weatherResponse)
    }
    fetchData()
  },[])





  return (
    <weatherContext.Provider value={ {apiData,envData,setApiData,setEnvData} }>
        { apiData && envData ? <WeatherPage/> : <Loading/> }
    </weatherContext.Provider>
  )
}

export default Weather







const WeatherPage = () => {
  const {apiData,envData,setApiData,setEnvData}  = useContext(weatherContext);



  const [ searchLoc,setSearchLoc] = useState("");
  const [ isActive,setIsActive] = useState(false);



  const submitHandler = async(e)=>{
    e.preventDefault()
    const {weatherResponse, forcastResponse} = await fetchCityApi(searchLoc)
    setApiData(weatherResponse)
    setEnvData(forcastResponse)
  }



  const monthList = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec']
  const d = apiData.location.localtime.split(' ')[0].split('-')[2]
  const m = apiData.location.localtime.split(' ')[0].split('-')[1]
  const y = apiData.location.localtime.split(' ')[0].split('-')[0]
  const time = apiData.location.localtime.split(' ')[1]




  
  return(
    <div className='weather-page'>
          <div className='weather-container'> 
                <form className='search-form' onSubmit={submitHandler}>
                    <input className='search-field' type='search' name='search' placeholder='Search your location' onChange={(e)=>setSearchLoc(e.target.value)}/>
                    <button className='search-button'><img src={search} width={30} height={30}/></button>
                </form>
                <div style={{display:'flex',justifyContent:'space-around',gap:'10px'}}>
                      <div className='current-weather'> 
                        <div style={{width:'36vw',height:'30vh',borderRadius:'10px',textAlign:'center',backgroundColor:'white'}}>
                          <h3 style={{fontWeight:'700'}}>{apiData.location.name} , {apiData.location.country}</h3>
                          <h6>Today {d} {monthList[parseInt(m)-1]} - {time}</h6>
                          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                              <img src={apiData.current.condition.icon} width={100} height={100} style={{ filter: 'opacity(0.5) drop-shadow(0 0 0 blue)' }}/>
                              <h6 style={{fontWeight:'700'}}>{apiData.current.condition.text}</h6>
                          </div>
                        </div>
                          <h5 style={{ marginTop:'30px'}}>Hourly weather data from today</h5>
                          <div className='weather-card'>
                              {
                                apiData.forecast.forecastday.map( day =>{
                                    return day.hour.map( hr => {
                                      const day = hr.time.split(' ')[0].split('-')[2]
                                      const month = hr.time.split(' ')[0].split('-')[1]
                                      const year = hr.time.split(' ')[0].split('-')[0]
                                      const time = hr.time.split(' ')[1]
                                      return(
                                          <div key={hr.time} className='weather-card-items'>
                                              <div>
                                                <h6 style={{fontWeight:'700'}}>{day} {monthList[parseInt(month)-1]} </h6>
                                                <h6 style={{fontWeight:'700'}}>{time}</h6>
                                              </div>
                                              <div>
                                                <img src={hr.condition.icon} width={50} height={50} style={{ filter: 'opacity(0.5) drop-shadow(0 0 0 skyblue)'}}/>
                                                <p style={{fontWeight:'700',fontSize:'11px'}}>{hr.condition.text}</p>
                                              </div>
                                          </div>
                                      )
                                    })
                                })
                              }
                          </div>
                      </div>
                      <div style={{width:'1px',height:'70vh',marginTop:'10px',backgroundColor:'gray'}}></div>
                      
                      
                      <div className='environment-condition'>
                            <h5 className='fl' style={{width:'33vw',fontWeight:'700',color:'white',height:'5vh',backgroundColor:'rgb(3, 154, 18)',borderRadius:'10px',boxShadow:'3px 3px 10px 1px rgb(133, 133, 133)'}}>Currently it is - {envData.current.is_day? "Day":"Night" }</h5>
                            
                            
                          <div className='fl-x'>
                            <div className='env-box'> 
                                <div className='fl'>
                                    <img src={temp} width={25} height={22}/>
                                    <h6 style={{fontWeight:'800'}}>Temperature</h6>
                                </div>
                                <h6 style={{fontWeight:'700'}}>{envData.current.apparent_temperature} {envData.current_units.apparent_temperature}</h6>
                            </div>
                          


                            
                            <div className='env-box'>
                                <div className='fl'>
                                    <img src={cloud} width={25} height={22}/>
                                    <h6 style={{fontWeight:'800'}}>Cloud</h6>
                                </div>
                                <h6 style={{fontWeight:'700'}}>{envData.current.cloud_cover} {envData.current_units.cloud_cover}</h6>
                            </div>
                          </div>

                          <div className='fl-x'>
                            <div className='env-box'>
                                <div className='fl'>
                                    <img src={pressure} width={25} height={22} />
                                    <h6 style={{fontWeight:'800'}}>Pressure &ensp;</h6>
                                    <img src={info} width={15} height={15} onMouseEnter={()=>setIsActive(!isActive)} onMouseLeave={()=>setIsActive(!isActive)}/> 
                                </div>
                                <div className={ isActive? 'info':'info active-info'}>
                                        <AltitudeMassage/>
                                </div>
                                <h6 style={{fontWeight:'700'}}>{envData.current.pressure_msl} {envData.current_units.pressure_msl}</h6>
                            </div>



                            <div className='env-box'>
                              <div className='fl'>
                                  <img src={surPressure} width={25} height={22}/>
                                <h6 style={{fontWeight:'800'}}>Surface Pressure &ensp;</h6>
                                <img src={info} width={15} height={15} onMouseEnter={()=>setIsActive(!isActive)} onMouseLeave={()=>setIsActive(!isActive)}/> 
                              </div>
                                <h6 style={{fontWeight:'700'}}>{envData.current.surface_pressure} {envData.current_units.surface_pressure}</h6>
                            </div>
                          </div>

                          <div className='fl-x'>
                            <div className='env-box'>
                            <div className='fl'>
                                <img src={snow} width={25} height={22}/>
                                <h6 style={{fontWeight:'800'}}>Snow Fall</h6>
                            </div>
                                <h6 style={{fontWeight:'700'}}>{envData.current.snowfall} {envData.current_units.snowfall}</h6>
                            </div>

                            <div className='env-box'>
                            <div className='fl'>
                                <img src={rain} width={25} height={22}/>
                                <h6 style={{fontWeight:'800'}}>Rain Fall</h6>
                                </div>
                                <h6 style={{fontWeight:'700'}}>{envData.current.rain} {envData.current_units.rain}</h6>
                            </div>

                            
                          </div>


                          <div className='fl-x'>
                            <div className='env-box'>
                              <div className='fl'>
                                <img src={wind} width={25} height={22}/>
                                <h6 style={{fontWeight:'800'}}>Wind Speed</h6>
                              </div>
                                <h6 style={{fontWeight:'700'}}>{envData.current.wind_speed_10m} {envData.current_units.wind_speed_10m}</h6>
                            </div>


                            <div className='env-box'>
                              <div className='fl'>
                              <img src={direction} width={25} height={22}/>
                                <h6 style={{fontWeight:'800'}}>Wind Direction</h6>
                              </div>
                                <h6 >{envData.current.wind_direction_10m} {envData.current_units.wind_direction_10m}</h6>
                            </div>

                            </div>
                      </div>
                      
                </div>
          </div>  
    </div>
  )
}









const Loading = () => {
  return(
    <div style={{ width:'100%', height:'100%'}}>
          <div className='weather-page'>
              <div className='weather-container'> 
                    <h1>Loading....</h1>
              </div>
          </div>
    </div>
  )
}