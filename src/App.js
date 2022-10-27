import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './Components/TopButtons';
import Inputs from './Components/Inputs';
import Location from './Components/Location';
import TodaysWeatherSummary from './Components/TodaysWeatherSummary';
import Forecast from './Components/Forecast';

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />
      <Location />
      <TodaysWeatherSummary />
      <Forecast />
    </div>
  );
}

export default App;
 