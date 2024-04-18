import { cn } from '../../lib/utils'
import * as React from 'react'
import { wrapFieldsWithMeta,  } from 'tinacms'

const colorOptions = [
	'Ally Green',
	'Light Grey',
	'Soft Black',
	'Dark Grey',
	'White',
	'Teal',
	'Cornflower',
	'Cool Grey',
	'Pink',
	'Light Blue',
	'Purple',
	'Dark Blue',
	'Green',
	'Yellow',
	'Orange',
	'Red',
	'Brown',
	'Dark Brown',
]

export const colorSelector = wrapFieldsWithMeta(({ input }) => {
	const inputClasses: Record<string, string> = {
		'Ally Green': 'bg-inreach-ally-green',
		'Light Grey': 'bg-inreach-light-grey',
		'Soft Black': 'bg-inreach-soft-black',
		'Dark Grey': 'bg-inreach-dark-grey',
		'White': 'bg-inreach-white',
		'Teal': 'bg-inreach-teal',
		'Cornflower': 'bg-inreach-cornflower',
		'Cool Grey': 'bg-inreach-cool-grey',
		'Pink': 'bg-inreach-pink',
		'Light Blue': 'bg-inreach-light-blue',
		'Purple': 'bg-inreach-purple',
		'Dark Blue': 'bg-inreach-dark-blue',
		'Green': 'bg-inreach-green',
		'Yellow': 'bg-inreach-yellow',
		'Orange': 'bg-inreach-orange',
		'Red': 'bg-inreach-red',
		'Brown': 'bg-inreach-brown',
		'Dark Brown': 'bg-inreach-dark-brown',
	}

	return (
		<>
			<input {...input} type='text' id={input.name} className='hidden' />
			<div className='flex gap-2 flex-wrap'>
				{colorOptions.map((color) => {
					return (
						<button
							key={color}
							className={cn('transition-all font-medium p-2 w-max h-9 rounded-lg bg-white leading-none shadow-md', {
								'bg-blue-500 text-white': input.value === color,
							})}
							onClick={() => {
								input.onChange(color)
							}}
						>
							{color}
						</button>
					)
				})}
			</div>
		</>
	)
})