import './App.css';
import React from 'react';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import NavBar from './Components/NavBar';
import Inputs from './Components/Inputs';
import Location from './Components/Location';
import TodaysWeatherSummary from './Components/TodaysWeatherSummary';
import Forecast from './Components/Forecast.jsx';
import { useState } from 'react'
import WeatherService from './Components/WeatherService';




function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${Location}&appid=247537e1b87fbdafa8d273c88d41b8ad`

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      {location}
      <NavBar />
      <Inputs location={location}/>
      <Location />
      <TodaysWeatherSummary />
      <Forecast title='Hourly Forcast'/>
      <Forecast title='Daily Forcast'/>
      <WeatherService />
    </div>
  );
}

export default App;
 