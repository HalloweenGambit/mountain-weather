import React from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
export default function Inputs() {
  return (
	<div className='flex flex-row justify-center my-6'>
		<div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
			<input 	type=""
				placeholder="Mountain Name..."
				className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize" 
				/>
			<UilSearch className="text-white transition ease-out hover:scale-125"/>
			<UilLocationPoint className="text-white transition ease-out hover:scale-125"/>
		</div>
		<div className='flex flex-row w-1/4 items-center justify-center'>
			<button name='metric' className='text-xl text-white font-light'>F°</button>
			<p className='text-xl text-white font-light mx-2'>|</p>
			<button name='imperial' className='text-xl text-white font-light'>C°</button>
		</div>
	</div>
  )
}
