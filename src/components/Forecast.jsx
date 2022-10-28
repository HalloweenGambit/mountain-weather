import React from 'react'
import { 	
	UilSunset,
	UilTemperaturePlus ,
	UilWind, 
	UilWater,
	UilTornado,
	UilSun,

			} from '@iconscout/react-unicons'


function Forecast({title}) {
  return (
	<div>
		<div className='flex items-center justify-start mt-6'>
			<p className='text-white font-medium uppercase'> 
				{title}
			</p>
		</div>
		<hr className='my-2' />

		<div className='flex flex-row items-center justify-between text-white'>
			<div className='flex flex-col items-center justify-center'>
				<p className='font-light text-sm'> 
					05:45 PM
				</p>
				<UilSun className='w-12 my-3'/>
				<p className='font-medium'> 
					05:45 PM
				</p>
			</div>
			<div className='flex flex-col items-center justify-center'>
				<p className='font-light text-sm'> 
					05:45 PM
				</p>
				<UilSun className='w-12 my-3'/>
				<p className='font-medium'> 
					05:45 PM
				</p>
			</div>
			<div className='flex flex-col items-center justify-center'>
				<p className='font-light text-sm'> 
					05:45 PM
				</p>
				<UilSun className='w-12 my-3'/>
				<p className='font-medium'> 
					05:45 PM
				</p>
			</div>
			<div className='flex flex-col items-center justify-center'>
				<p className='font-light text-sm'> 
					05:45 PM
				</p>
				<UilSun className='w-12 my-3'/>
				<p className='font-medium'> 
					05:45 PM
				</p>
			</div>
			<div className='flex flex-col items-center justify-center'>
				<p className='font-light text-sm'> 
					05:45 PM
				</p>
				<UilSun className='w-12 my-3'/>
				<p className='font-medium'> 
					05:45 PM
				</p>
			</div>
		</div>
	</div>
  )
}

export default Forecast