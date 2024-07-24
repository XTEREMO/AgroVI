require("dotenv").config()



const weatherAPI = {
    weather: async(req,res)=>{
        const {lat,lon} = req.body;
        try {
            let [weatherPromise, forcastPromise] = await Promise.all([
              fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.GEO_API_KEY}&q=${lat+","+lon}&days=$5&aqi=no&alerts=no`),
              fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m`),
            ]);
            const weatherResponse = await weatherPromise.json();
            const forcastResponse = await forcastPromise.json();
            res.status(200).json({weatherResponse, forcastResponse})
        } catch (error) {
            res.status(404).json({massage:"error in weather API"})
        }
    },
    cities: async(req,res)=>{
        try {
            const response = await fetch(
              `${process.env.GEO_API_URL}/cities?minPopulation=10000&namePrefix=${req.body.searchLoc}`,{
                method: 'GET',
                headers: {
                  'X-RapidAPI-Key': process.env.RAPID_API_KEY,
                  'X-RapidAPI-Host': process.env.RAPID_API_HOST,
                },
              });
              let loc = await response.json();
              const ful_loc = loc.data[0].latitude+","+loc.data[0].longitude;
                  try {
                      let [weatherPromise, forcastPromise] = await Promise.all([
                        fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.GEO_API_KEY}&q=${ful_loc}&days=$5&aqi=no&alerts=no`),
                        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${loc.data[0].latitude}&longitude=${loc.data[0].longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m`),
                      ]);
                      const weatherResponse = await weatherPromise.json();
                      const forcastResponse = await forcastPromise.json();
                      res.status(200).json({weatherResponse, forcastResponse})
                  } catch (error) {
                      res.status(404).json({massage:"error in weather API"})
                  }
          } catch (error) {
            console.log(error)
            res.status(404).json({massage:"error in cities API"})
          }
    }
}
module.exports = weatherAPI;
