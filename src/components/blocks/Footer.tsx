import React from 'react'
import { Template } from 'tinacms'
import type { PageBlocksFooter } from '~tina/__generated__/types'
import Image from 'next/image'
import InReachLogo from '../../../public/inreach-logos/InReach_Logo_Color_RGB.svg'
import { Button } from '@mantine/core'
import { Icon as Iconify } from '@iconify/react'

export const FooterContainer = ({ data }: { data: PageBlocksFooter }) => {
	return (
		<div className='bg-inreach-secondary-grey grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-12 py-10'>
			<div className='col-span-2 grid grid-rows-4 max-sm:place-items-center'>
				{/* Logo */}
				<Image src={InReachLogo} alt='in-reach-logo' className='sm:w-1/6 w-1/2' />
				<h1 className='max-sm:text-center'>
					<p className='text-2xl w-3/4 max-sm:w-full'>{data.slogan}</p>
				</h1>
				<Button className='mt-3 min-w-[160px] px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base w-1/3 bg-black'>
					Powered by Vercel
				</Button>
				<p>{data.disclaimer}</p>
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
				<div className='grid grid-cols-4 gap-4 w-1/2'>
					{/* Social Media */}
					<Iconify icon={'akar-icons:facebook-fill'} />
					<Iconify icon={'akar-icons:twitter-fill'} />
					<Iconify icon={'akar-icons:linkedin-fill'} />
					<Iconify icon={'akar-icons:instagram-fill'} />
					<Iconify icon={'akar-icons:youtube-fill'} />
					<Iconify icon={'akar-icons:tiktok-fill'} />
					<Iconify icon={'akar-icons:github-fill'} />
					<Iconify icon={'mdi:email'} />
				</div>
			</div>
		</div>
	)
}

export const footerTemplate: Template = {
	name: 'footer',
	label: 'Footer',
	fields: [
		{
			name: 'slogan',
			type: 'string',
			label: 'Slogan',
		},
		{
			name: 'disclaimer',
			type: 'string',
			label: 'Disclaimer',
		},
	],
}
