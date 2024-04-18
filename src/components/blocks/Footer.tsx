import React from 'react'
import { Template } from 'tinacms'
import type { PageBlocksFooter } from '~tina/__generated__/types'
import Image from 'next/image';
import InReachLogo from '../../../public/inreach-logos/InReach_Logo_Color_RGB.svg'
import { Button } from '@mantine/core';

export const FooterContainer = ({ data }: { data: PageBlocksFooter }) => {
	const description = data.description || ''
	return (
		<div className='bg-inreach-secondary-grey grid grid-cols-4 gap-4 px-6'>
			<div className='col-span-2 grid grid-rows-4'>
				{/* Logo */}
				<Image src={InReachLogo} alt="in-reach-logo" className='w-1/6 '/>
				<h1>
					<p className='text-2xl w-3/4'>
					Seek LGTB+ resources. Reach Safety. Find belonging
					</p>
				</h1>
				<Button className='w-1/3 bg-black'>Powered by Vercel</Button>
				<p>InReach, Inc. 2023 • All rights reserved • InReach ❤️ Open Source</p>
			</div>
			<div className='flex flex-col space-y-4'>
				{/* Support */}
				<b>Support</b>
				<p>Suggest an organization</p>
				<p>Share feedback</p>
				<p>Vetting process</p>
				<p>Privacy statement</p>
				<p>Anti-hate commitment</p>
				<p>Digital accessibility</p>
				<p>Disclaimer</p>
			</div>
			<div className='flex flex-col space-y-4'>
				{/* Connect */}
				<b>Connect</b>
				<p>InReach.org</p>
				<p>Download the app</p>
				<p>Subscribe to a newletter</p>
			</div>
		</div>
	)
}

export const footerTemplate: Template = {
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
