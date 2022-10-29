import { info } from "autoprefixer"
import React from 'react'
import { useState } from "react"

function WeatherService() {
  const API_KEY = '247537e1b87fbdafa8d273c88d41b8ad'

  //modified by input
  const [location, setLocation] = useState("Beaver Creek");

  //modified by api
  const [coordinates, setCoordinates] = useState({lat: '39.7092', lon: '-84.0633'})
  const [temp, setTemp] = useState(0);
  const [feelsLike, setFeelsLike] = useState(0);
  const [wind, setWind] = useState({});
  const [humidity, setHumidity] = useState(0);
  
  const [hourlyWeather, setHourlyWeather] = useState({});
  const [photos, setPhotos] = useState([]);
  

  //api vs https:// = return html vs json
  //use name to extract coordinates > use coordinates to extract hourly data information
  const getWeatherData = async() => {
    let lon;
    let lat;

    try {
      const initialResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
                                          ${location}&appid=${API_KEY}`);
      const basicData = await initialResponse.json()
      lon = basicData.coord.lon
      lat = basicData.coord.lat

      console.log(basicData)
      //set coordinates, Name, feelsLike, humidity, wind, Gust, sunRise, sunSet
      setCoordinates(prevData => basicData.coord)
      setTemp(prevData => basicData.main.temp)
      setFeelsLike(prevData => basicData.main.feels_like)
      setWind(prevData => basicData.wind)
      setHumidity(prevData => basicData.main.humidity)
                                
      //api. => html response
      const SecondaryResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
      const fullWeatherData = await SecondaryResponse.json()
      
      console.log(fullWeatherData)
    }
    catch (e) {
      console.log(e)
    }
  }


  const checkStates = () => {
    console.log(location)
    console.log(coordinates)
    console.log(temp)
    console.log(feelsLike)
    console.log(wind)
    console.log(humidity)
  }


  return (
    <div>
      <button onClick={getWeatherData}>Click me for basic weather</button>
      <button onClick={checkStates}>Click me to see the current weather states</button>
    </div>
  )
}

export default WeatherService

// const REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'
// const REACT_APP_ICON_URL = 'https://openweathermap.org/img/w'
