import { info } from "autoprefixer"
import React from 'react'
import { useState } from "react"

function WeatherService() {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState("Beaver Creek");
  const [photos, setPhotos] = useState([]);

  const [coordinates, setCoordinates] = useState({
    lon: '',
    lat: ''
  })
  

  const API_KEY = '247537e1b87fbdafa8d273c88d41b8ad'

  const REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'
  const REACT_APP_ICON_URL = 'https://openweathermap.org/img/w'

  const getBasicWeatherData = async() => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
                                    ${location}&appid=247537e1b87fbdafa8d273c88d41b8ad`);

                                    
      const data = await response.json()
      
      setCoordinates({lon: data.coord.lon,
                      lat: data.coord.lat})

      console.log(coordinates)
    }
    catch (e) {
      console.log(e)
    }
  }

  const getFullWeatherData = async() => {
    getBasicWeatherData()

    try {
      //api. => html response
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=45.2879&lon=-122.5356&appid=247537e1b87fbdafa8d273c88d41b8ad`);
      
      console.log(response)
      const data = await response.json()
      // const data = await response.json()
      
      
      
    }
    catch (e) {
      console.log(e)
    }
  }



  return (
    <div>
      <button onClick={getFullWeatherData}>Click me for basic weather</button>
    </div>
  )
}

export default WeatherService




// https://api.openweathermap.org/data/2.5/weather?q=London&appid=247537e1b87fbdafa8d273c88d41b8ad


