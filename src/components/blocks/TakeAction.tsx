import React, { ReactNode } from 'react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import type { Template } from 'tinacms'
import { Button } from '@mantine/core'
import Link from 'next/link'
import type {
	PageBlocksActions,
	PageBlocksActionsItems,
	PageBlocksActionsItemsBodyActionButtonFilter,
} from '~tina/__generated__/types'
import { cn } from '../../lib/utils'
import { inputClasses } from '../fields/ColorSelector/colors'
import { ColorSelector } from '../fields/ColorSelector/ColorSelector'

const components = {
	ActionButton: (props: PageBlocksActionsItemsBodyActionButtonFilter) => {
		return (
			<Button
				variant='filled'
				color='#65676B'
				component={Link}
				href={{ pathname: props.link as unknown as string }}
			>
				{props.actionText as ReactNode}
			</Button>
		)
	},
}

export const TakeAction = ({
	data,
	display,
	size,
}: {
	data: PageBlocksActionsItems
	display: string
	size: string
}) => {
	return display === 'flex' ? (
		<div className={cn('md:max-w-[33.333333%] md:w-1/3 p-1 w-full', { flex: size === 'fillHeight' })}>
			<div
				className={
					cn('w-full gap-3 border-2 border-black rounded-lg flex flex-col justify-between items-center text-black p-4', data.backgroundColor ? inputClasses[data.backgroundColor] : 'bg-white',)
				}
			>
				{data?.title && (
					<h1 className='lg:text-2xl md:text-xl text-2xl font-bold text-center'>{data.title}</h1>
				)}
				{data?.text && <p className='md:text-md text-sm lg:text-lg'>{data.text}</p>}
				<TinaMarkdown components={components} content={data?.body} />
			</div>
		</div>
	) : (
		<div className={cn('w-full p-1', { flex: size === 'fillHeight' })}>
			<div className='w-full gap-3 border-2 border-black rounded-lg flex flex-col justify-between items-center text-black p-4 bg-white'>
				{data?.title && <h1 className='lg:text-2xl md:text-xl text-2xl font-bold'>{data.title}</h1>}
				{data?.text && <p className='md:text-md text-sm lg:text-lg'>{data.text}</p>}
				<TinaMarkdown components={components} content={data.body} />
			</div>
		</div>
	)
}

export const TakeActionContainer = ({ data }: { data: PageBlocksActions }) => {
	return (
		<div
			className={
				data.display === 'grid'
					? 'grid md:grid-cols-3 grid-cols-1 p-4 max-w-7xl mx-auto'
					: 'flex w-full flex-wrap justify-center p-4 max-w-7xl mx-auto'
			}
		>
			{data.items &&
				data.items.map((block: PageBlocksActionsItems | null, i: number) => {
					if (block)
						return (
							<TakeAction
								data={block}
								key={i + block.title}
								display={data.display as string}
								size={data.boxSizing as string}
							/>
						)
				})}
		</div>
	)
}

export const takeActionBlockTemplate: Template = {
	name: 'actions',
	label: 'Take Action Display',
	fields: [
		{
			type: 'string',
			name: 'display',
			label: 'Display',
			options: [
				{
					label: 'Grid',
					value: 'grid',
				},
				{
					label: 'Flex',
					value: 'flex',
				},
			],
		},
		{
			type: 'string',
			name: 'boxSizing',
			label: 'Box Sizing',
			options: [
				{
					label: 'Fill Height',
					value: 'fillHeight',
				},
				{
					label: 'Fit Content',
					value: 'fitContent',
				},
			],
		},
		{
			type: 'object',
			label: 'Action Items',
			name: 'items',
			list: true,
			ui: {
				itemProps: (item) => {
					return {
						label: item?.title || '',
					}
				},
				defaultItem: {
					title: 'Action Title',
					text: 'Action Text',
					body: {
						type: 'root',
						children: [
							{
								type: 'mdxJsxFlowElement',
								name: 'ActionButton',
								props: {
									actionText: 'Default',
									link: '/',
								},
							},
						],
					},
				},
			},
			fields: [
				{
					type: 'string',
					label: 'Title',
					name: 'title',
					required: true,
				},
				{
					type: 'string',
					label: 'Text',
					name: 'text',
				},
        {
          type: 'string',
          label: 'Background Color',
          name: 'backgroundColor',
          ui: {
            component: ColorSelector
          },
        },
				{
					label: 'Body',
					type: 'rich-text',
					name: 'body',
					isBody: true,
					templates: [
						{
							name: 'ActionButton',
							label: 'Action Button',
							fields: [
								{
									type: 'string',
									name: 'actionText',
									label: 'Action Button Text',
								},
								{
									type: 'string',
									name: 'link',
									label: 'Button Link',
									required: true,
								},
							],
						},
					],
				},
			],
		},
	],
}
