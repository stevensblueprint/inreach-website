import { Menu, Burger, Group } from '@mantine/core'
import Image from 'next/image'
import React from 'react'
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

export const Header = ({ data }: { data: PageBlocksHeader }) => {

  const items = data.navLinks ? 
                  data.navLinks.map((item, i) => {
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
                : 
                  null
  
  const [opened, { toggle }] = useDisclosure(false)

	return (
		<header
			className={cn(
				'w-full h-20 flex justify-center items-center',
				data.navBGColor ? inputClasses[data.navBGColor] : 'bg-white'
			)}
		>
			<div className='flex max-w-7xl justify-between items-center w-full p-4'>
				{data.logo && data.logo.src && data.logo.alt && (
					<Image src={data.logo?.src} alt={data.logo.alt} width={200} height={60} />
				)}
				{data.navLinks && (
          <>
            <Group className='md:w-1/2 flex justify-between' visibleFrom='sm'>
              {items}
            </Group>
            <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          </>
				)}
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
	],
}
