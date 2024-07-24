import { dataFetch_at_8000 } from '../../../Hooks/axiosFetch'

export const fetchWeatherApi = async(lat='22.5057896',lon='88.3905986')=>{
        const {weatherResponse, forcastResponse} = await dataFetch_at_8000('weather',{
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({lat,lon})
        })
        return {weatherResponse, forcastResponse}
    }

export const fetchCityApi = async(searchLoc)=>{
            const {weatherResponse, forcastResponse} = await dataFetch_at_8000('cities',{
                method: 'POST',
                credentials: 'include',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({searchLoc})
              })
              return {weatherResponse, forcastResponse}
        }
