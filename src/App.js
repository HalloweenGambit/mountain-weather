import './App.css';
import React, { useEffect, useState } from 'react';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import NavBar from './Components/NavBar';
import Inputs from './Components/Inputs';
import Location from './Components/Location';
import TodaysWeatherSummary from './Components/TodaysWeatherSummary';
import Forecast from './Components/Forecast.jsx';



function App() {
  const API_KEY = '247537e1b87fbdafa8d273c88d41b8ad'

  //modified by input
  const [currentLocation, setCurrentLocation] = useState("Beaver Creek");

  //modified by api
  const [coordinates, setCoordinates] = useState({lat: '39.7092', lon: '-84.0633'})
  const [location, setLocation] = useState({name: '', lat: 0, long: 0})
  const [temp, setTemp] = useState(0);
  const [feelsLike, setFeelsLike] = useState(0);
  const [wind, setWind] = useState({});
  const [humidity, setHumidity] = useState(0);
  
  const [hourlyWeather, setHourlyWeather] = useState([]);
  const [photos, setPhotos] = useState([]);

  const [basicData,setBasicData] = useState({})


  useEffect(() => {
    console.log('rendered')
  }, [currentLocation])
  // const checkStates = () => {
  //   //has to be a way to run this function with a parameter containing location
  //   console.log(currentLocation, coordinates, temp, feelsLike, wind, humidity, hourlyWeather)
  // }

  //api vs https:// = return html vs json
  //use name to extract coordinates > use coordinates to extract hourly data information
  
  const getWeatherData = async() => {
    let lon;
    let lat;

    try {
      const initialResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
                                          ${currentLocation}&appid=${API_KEY}`);

      const basicData = await initialResponse.json()
      console.log()
      lon = basicData.coord.lon
      lat = basicData.coord.lat
      
      setBasicData(basicData)
      //set coordinates, Name, feelsLike, humidity, wind, Gust, sunRise, sunSet
      setCoordinates(basicData.coord)
      setTemp(basicData.main.temp)
      setFeelsLike(basicData.main.feels_like)
      setWind(basicData.wind)
      setHumidity(basicData.main.humidity)
      
                                
      //api. => html response
      const SecondaryResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
      const fullWeatherData = await SecondaryResponse.json()
      //extract daily/hourly weather
      setHourlyWeather(fullWeatherData.list)
      console.log(basicData)

    }
    catch (e) {
      console.log(e)
    }
  }



  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      
      <NavBar changeLocation={setCurrentLocation}/>
      <Inputs changeLocation={setCurrentLocation}/>
      <Location />
      <TodaysWeatherSummary temp={temp} feelsLike={feelsLike} humidity={humidity} wind={wind}/>
      <Forecast title='Hourly Forcast'/>
      <Forecast title='Daily Forcast'/>
    </div>
  );
}

export default App;
 