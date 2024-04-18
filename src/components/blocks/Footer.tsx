import React from 'react'
import type { PageBlocksFooter } from '~tina/__generated__/types'

export const FooterContainer = ({ data }: { data: PageBlocksFooter }) => {
	const description = data.description || ''
	return (
		<div className='bg-inreach-secondary-grey grid grid-cols-4 gap-4'>
			<div className='col-span-2'>
				{/* Logo */}
				Logo
			</div>
			<div>
				{/* Support */}
				Support
			</div>
			<div>
				{/* Connect */}
				Connect
			</div>
		</div>
	)
}

export const footerTemplate = {
	name: 'footer',
	label: 'Footer',
	fields: [
		{
			name: 'header',
			type: 'string',
			label: 'Header',
		},
		{
			name: 'description',
			type: 'string',
			label: 'Header Description',
		},
	],
}
