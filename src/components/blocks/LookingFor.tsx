import React from 'react'
import { Template } from 'tinacms'
import { ColorSelector } from '../fields/ColorSelector/ColorSelector'
import { PageBlocksLookingFor, PageBlocksLookingForBoxes } from '~tina/__generated__/types'
import { cn } from '../../lib/utils'
import { inputClasses, inputProseClasses } from '../fields/ColorSelector/colors'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

export const LookingForContainer = ({ data }: { data: PageBlocksLookingFor }) => {
	return (
		<section className='w-full md:grid-cols-4 grid sm:grid-cols-2 grid-cols-1 min-h-52'>
			{data.leftHeader && (
				<div
					className={cn(
						'sm:col-span-2 col-span-1 md:p-12 p-4 flex justify-center items-start prose flex-col max-w-none prose-headings:m-0 prose-p:m-0 gap-2',
						data.leftHeader.backgroundColor ? inputClasses[data.leftHeader.backgroundColor] : 'bg-white',
						data.leftHeader.textColor
							? inputProseClasses[data.leftHeader?.textColor]
							: `prose-headings:text-black prose-p:text-black`
					)}
				>
					<TinaMarkdown content={data.leftHeader.header} />
				</div>
			)}
			{data.boxes &&
				data.boxes.map((box, i) => {
					if (box) return <LookingForBlock data={box} key={i} />
				})}
		</section>
	)
}

const LookingForBlock = ({ data }: { data: PageBlocksLookingForBoxes }) => {
	return (
		<div
			className={cn(
				'w-full text-center flex justify-center items-center text-pretty p-4',
				data.boxBackgroundColor ? inputClasses[data.boxBackgroundColor] : 'bg-white',
				data.boxTextColor ? inputProseClasses[data.boxTextColor] : 'text-black'
			)}
		>
			<TinaMarkdown content={data.boxContent} />
		</div>
	)
}

export const lookingForTemplate: Template = {
	name: 'lookingFor',
	label: 'Looking For',
	fields: [
		{
			name: 'leftHeader',
			type: 'object',
			label: 'Left Header',
			fields: [
				{
					name: 'header',
					type: 'rich-text',
					label: 'Header',
					isBody: true,
				},
				{
					name: 'textColor',
					type: 'string',
					label: 'Text Color',
					ui: {
						component: ColorSelector,
					},
				},
				{
					name: 'backgroundColor',
					type: 'string',
					label: 'Background Color',
					ui: {
						component: ColorSelector,
					},
				},
			],
		},
		{
			name: 'boxes',
			type: 'object',
			label: 'Boxes',
			list: true,
			ui: {
				itemProps: (item: PageBlocksLookingForBoxes) => ({
					key: item?.title ? item.title : 'Blank Box',
					label: item?.title ? item.title : 'Blank Box',
				}),
			},
			fields: [
				{
					name: 'title',
					type: 'string',
					label: 'Box Title',
					description: 'This is for the labels in the CMS',
				},
				{
					name: 'boxContent',
					type: 'rich-text',
					isBody: true,
					label: 'Box Content',
				},
				{
					name: 'boxTextColor',
					type: 'string',
					label: 'Box Text Color',
					ui: {
						component: ColorSelector,
					},
				},
				{
					name: 'boxBackgroundColor',
					type: 'string',
					label: 'Box Background Color',
					ui: {
						component: ColorSelector,
					},
				},
			],
		},
	],
}
