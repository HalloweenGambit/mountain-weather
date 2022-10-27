import React from 'react'

export default function TopButtons() {
	const cities = [
		{id:1, 
		name:'Beaver Creek'
		},
		{id:2, 
		name:'Vail'
		},
		{id:3, 
		name:'Breckenridge'
		},
		{id:4, 
		name:'Keystone'
		},
		{id:5, 
		name:'Telluride'
		},
	]

  	return (
		<div className='flex items-center justify-around my-6'>
			{cities.map((city) => (
			<button 
				key={city.id}
				className='text-white text-lg font-medium'>
					{city.name}
			</button>))}
		</div>
  	)
}
