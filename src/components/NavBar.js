import React from 'react'

export default function TopButtons() {
	const quickLocations = [
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
			{quickLocations.map((location) => (
			<button 
				key={location.id}
				className='text-white text-lg font-medium'>
					{location.name}
			</button>))}
		</div>
  	)
}
