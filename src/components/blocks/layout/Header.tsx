import { Menu, Burger, Group, TextInput, Button } from '@mantine/core'
import Image from 'next/image'
import React, { useState } from 'react'
import { Template } from 'tinacms'
import {
	PageBlocksHeader,
	PageBlocksHeaderNavLinks,
	PageBlocksHeaderNavLinksLinkUrls,
} from '~tina/__generated__/types'
import { cn } from '../../../lib/utils'
import { ColorSelector } from '../../../components/fields/ColorSelector/ColorSelector'
import { inputClasses } from '../../../components/fields/ColorSelector/colors'
import { useDisclosure } from '@mantine/hooks'
import { Icon as Iconify } from '@iconify/react'
import ReactCountryFlag from 'react-country-flag'

export const Header = ({ data }: { data: PageBlocksHeader }) => {
	const [selectedLanguage, setSelectedLanguage] = useState(data.languages?.[0] || null)
	const items = data.navLinks
		? data.navLinks.map((item, i) => {
				return (
					<Menu key={item?.linkName} trigger='hover' withinPortal>
						{item?.linkName && (
							<Menu.Target>
								<p className='font-bold'>{item?.linkName}</p>
							</Menu.Target>
						)}
						<Menu.Dropdown>
							{item &&
								item.linkUrls &&
								item.linkUrls.map((link, i) => {
									if (link && link.sectionUrl && link.pathURL)
										return (
											<Menu.Item key={link.sectionUrl}>
												<a href={`${link.pathURL}`}>{link.sectionUrl}</a>
											</Menu.Item>
										)
								})}
						</Menu.Dropdown>
					</Menu>
				)
			})
		: null

	const languageSelector = selectedLanguage && (
		<Menu trigger='hover' withinPortal>
			<Menu.Target>
				<div className='flex items-center space-x-2 cursor-pointer'>
					{selectedLanguage.flag && (
						<ReactCountryFlag
							countryCode={selectedLanguage.flag}
							svg
							style={{
								width: '1.5em',
								height: '1.5em',
							}}
						/>
					)}
					<p className='font-bold'>{selectedLanguage.language}</p>
				</div>
			</Menu.Target>
			<Menu.Dropdown>
				{data.languages
					?.filter((lang) => lang?.language !== selectedLanguage.language)
					.map((langOption) => (
						<Menu.Item
							key={langOption?.language}
							className='flex items-center space-x-2'
							onClick={() => {
								setSelectedLanguage(langOption)
								console.log(`Switching to ${langOption?.language}`)
							}}
						>
							{langOption?.flag && (
								<ReactCountryFlag
									countryCode={langOption.flag}
									svg
									style={{
										width: '1.5em',
										height: '1.5em',
									}}
								/>
							)}
							<span>{langOption?.language}</span>
						</Menu.Item>
					))}
			</Menu.Dropdown>
		</Menu>
	)

	const [opened, { toggle }] = useDisclosure(false)

	return (
		<header
			className={cn(
				'w-full h-20 flex justify-center items-center',
				data.navBGColor ? inputClasses[data.navBGColor] : 'bg-white'
			)}
		>
			<div className='flex max-w-7xl justify-between items-center w-full p-4'>
				<div className='flex items-center'>
					{data.logo && data.logo.src && data.logo.alt && (
						<Image src={data.logo?.src} alt={data.logo.alt} width={200} height={60} />
					)}
				</div>
				{data.navLinks && (
					<>
						<Group className='md:w-1/2 flex justify-between' visibleFrom='sm'>
							{items}
						</Group>
						<Burger opened={opened} onClick={toggle} size='sm' hiddenFrom='sm' />
					</>
				)}
				<div className='hidden md:flex items-center space-x-8'>
					<Button variant='default'>
						<p className='font-bold'>Donate</p>
					</Button>

					<div className='flex items-center space-x-2'>
						<Iconify icon={'material-symbols:search'} style={{ width: '24px', height: '24px' }} />
						<TextInput
							placeholder='Search'
							variant='outlined'
							className='bg-transparent border border-black focus:ring-0 rounded-full w-32'
						/>
					</div>

					{languageSelector && <div>{languageSelector}</div>}
				</div>
				<div className='md:hidden flex items-center'>
					<Burger opened={opened} onClick={toggle} size='sm' />
				</div>
			</div>
		</header>
	)
}

export const headerTemplate: Template = {
	name: 'header',
	label: 'Header',
	fields: [
		{
			name: 'logo',
			type: 'object',
			label: 'Logo',
			fields: [
				{
					name: 'src',
					label: 'Logo Source',
					type: 'image',
				},
				{
					name: 'alt',
					label: 'Logo Alt',
					type: 'string',
				},
			],
		},
		{
			name: 'navBGColor',
			label: 'Background Color',
			type: 'string',
			ui: {
				component: ColorSelector,
			},
		},
		{
			name: 'navLinks',
			label: 'Links',
			list: true,
			type: 'object',
			ui: {
				itemProps: (item: PageBlocksHeaderNavLinks) => {
					return {
						label: item.linkName ? item.linkName : 'New Link',
					}
				},
			},
			fields: [
				{
					name: 'linkName',
					label: 'Link Name',
					description: 'The name of the link shown in the navbar',
					type: 'string',
				},
				{
					name: 'linkUrls',
					label: 'Link URLs',
					type: 'object',
					list: true,
					ui: {
						itemProps: (item: PageBlocksHeaderNavLinksLinkUrls) => {
							return {
								label: item.sectionUrl ? item.sectionUrl : 'New Link',
							}
						},
					},
					fields: [
						{
							name: 'sectionUrl',
							label: 'Sub URLs',
							type: 'string',
							description: 'This is the name of the URL to be shown in the hover dropdown',
						},
						{
							name: 'pathURL',
							label: 'Path URL',
							type: 'string',
							description: 'This is the path URL to the page',
						},
					],
				},
			],
		},
		{
			name: 'languages',
			label: 'Languages',
			list: true,
			type: 'object',
			ui: {
				itemProps: (item: { language: string }) => {
					return {
						label: item.language ? item.language : 'New Language',
					}
				},
			},
			fields: [
				{
					name: 'language',
					label: 'Language',
					description: 'Supported Language',
					type: 'string',
				},
				{
					name: 'flag',
					label: 'Flag',
					type: 'string',
					description: 'Country Code',
				},
			],
		},
	],
}
