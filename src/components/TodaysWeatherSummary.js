import React from 'react'
import { 	
	UilSunset,
	UilTemperaturePlus ,
	UilWind, 
	UilWater,
	UilTornado,
	UilSun,

			} from '@iconscout/react-unicons'

function TodaysWeatherSummary(props) {
  return (
	<div>
		<div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
			<p>Blue Bird</p>
		</div>

		<div className='flex flex-row items-center justify-between py-3 text-xl text-white'>
			<UilSunset className='w-20'/>
			<p className='flex flex-col space-y-2'>{props.temp}</p>
			<div className='flex flex-col space-y-2 '>
				<div className='flex font-light text-sm items-center justify-center'>
					<UilTemperaturePlus size={18} className='mr-1'/>
					<span>Feels Like:</span>
					<span className='font-medium ml-1'>28°</span>
				</div>
				<div className='flex font-light text-sm items-center justify-center'>
					<UilWater  size={18} className='mr-1'/>
					<span>Humidity:</span>
					<span className='font-medium ml-1'>22%</span>
				</div>
				<div className='flex font-light text-sm items-center justify-center'>
					<UilWind size={18} className='mr-1'/>
					<span>Wind:</span>
					<span className='font-medium ml-1'>11 mph</span>
				</div>
				<div className='flex font-light text-sm items-center justify-center'>
					<UilTornado size={18} className='mr-1'/>
					<span>Gust:</span>
					<span className='font-medium ml-1'>15 mph</span>
				</div>
			</div>
		</div>

		<div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
			<UilSun />
			<p className='font-light'>
				Rise: <span className='font-medium ml-1'>06:45 AM</span>
			</p>
			<p className='font-light'>|</p>

			<UilSunset />
			<p className='font-light'>
				Set: <span className='font-medium ml-1'>18:45 PM</span>
			</p>
			<p className='font-light'>|</p>

			<UilSun />
			<p className='font-light'>
				Low: <span className='font-medium ml-1'>32°</span>
			</p>
			<p className='font-light'>|</p>

			<UilSun />
			<p className='font-light'>
				High: <span className='font-medium ml-1'>28°</span>
			</p>
		</div>
		
	</div>
  )
}

export default TodaysWeatherSummary