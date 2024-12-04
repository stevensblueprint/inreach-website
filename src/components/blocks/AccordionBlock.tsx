import React from 'react'
import type { Template } from 'tinacms'
import { Accordion } from '@mantine/core'
import { PageBlocksAccordionblock } from '~tina/__generated__/types'
import { Icon as Iconify } from '@iconify/react'

export const AccordionBlock = ({ data }: { data: PageBlocksAccordionblock }) => {
	const [activeIndexes, setActiveIndexes] = React.useState<number[]>([])

	const toggleIndex = (index: number) => {
		setActiveIndexes((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
	}

	return (
		<div className='grid grid-cols-8 col-span-4 py-8 bg-white'>
			<div className='col-start-3 col-span-4'>
				<h1 className='text-[#00D56C] text-3xl font-bold'>{data.blockTitle}</h1>
				<Accordion multiple>
					{data.content?.map((item, index) => {
						return item ? (
							<Accordion.Item key={index} value={item.accordionTitle || ''}>
								<Accordion.Control
									icon={
										activeIndexes.includes(index) ? (
											<Iconify icon='mdi:minus' width={18} />
										) : (
											<Iconify icon='mdi:plus' width={18} />
										)
									}
									onClick={() => toggleIndex(index)}
								>
									<p className='text-xl font-bold'>{item.accordionTitle}</p>
								</Accordion.Control>
								<Accordion.Panel>{item.accordionContent}</Accordion.Panel>
							</Accordion.Item>
						) : null
					})}
				</Accordion>
			</div>
		</div>
	)
}

export const AccordionContainer = ({ data }: { data: PageBlocksAccordionblock }) => {
	return <AccordionBlock data={data} />
}

export const accordionTemplate: Template = {
	name: 'accordionblock',
	label: 'Accordion Block',
	fields: [
		{
			name: 'blockTitle',
			type: 'string',
			label: 'Block title',
		},
		{
			name: 'content',
			type: 'object',
			label: 'Accordion items',
			list: true,
			ui: {
				itemProps: (item: { accordionTitle: string }) => ({
					key: item.accordionTitle,
					label: item.accordionTitle,
				}),
				defaultItem: {
					accordionTitle: 'Accordion Title',
					accordionContent: 'Accordion Content',
				},
			},
			fields: [
				{
					name: 'accordionTitle',
					type: 'string',
					label: 'Title',
				},
				{
					name: 'accordionContent',
					type: 'string',
					label: 'Content',
					ui: {
						component: 'textarea',
					},
				},
			],
		},
	],
}
