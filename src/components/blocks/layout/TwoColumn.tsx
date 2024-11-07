import type { Template } from 'tinacms'
import { TinaMarkdown, type Components, TinaMarkdownContent } from 'tinacms/dist/rich-text'
import { PageBlocksTwoColumn } from '~tina/__generated__/types'
import { textColorClasses } from '../../fields/ColorSelector/colors'
import { ColorSelector } from '../../fields/ColorSelector/ColorSelector'
import { cn } from '../../../lib/utils'

// helper function to parse youtube video id from shared url
const ytParser = (url: string) => {
	var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
	var match = url.match(regExp)
	return match && match[7].length == 11 ? match[7] : false
}

const tinaComponents: Components<any> = {
	YoutubeEmbed: ({ url }: { url: string }): JSX.Element => {
		let ytURL = url ? `https://www.youtube.com/embed/${ytParser(url)}` : ''
		return (
			<span className='flex h-[330px] lg:h-[400px] justify-center items-center'>
				<iframe
					width='100%'
					height='100%'
					src={ytURL}
					title='YouTube video player'
					allow='accelerometer;
					autoplay;
					clipboard-write;
					encrypted-media;
					gyroscope;
					picture-in-picture;
					web-share'
					allowFullScreen
				></iframe>
			</span>
		)
	},
	ColoredText: ({ text, color }: { text: string; color: string }): JSX.Element => {
		return (
			<span className={cn('text-inherit inline', color ? textColorClasses[color] : 'text-black')}>
				{text}
			</span>
		)
	},
}

const ColumnContent = ({ richTextContent }: { richTextContent: TinaMarkdownContent }) => {
	return (
		<div className='w-full md:w-1/2 flex flex-col grow justify-center prose prose-headings:my-6 prose-p:my-2'>
			<TinaMarkdown components={tinaComponents} content={richTextContent} />
		</div>
	)
}

export const TwoColumn = ({ data }: { data: PageBlocksTwoColumn }) => {
	const { heading, richTextLeft, richTextRight } = data
	return (
		<div className='w-full flex flex-col justify-center items-center p-10'>
			<div className='w-full max-w-7xl'>
				{heading && <h1 className='text-2xl uppercase pb-10 font-bold'>{heading}</h1>}
				<div className='w-full flex flex-col md:flex-row gap-10 justify-center'>
					<ColumnContent richTextContent={richTextLeft} />
					<ColumnContent richTextContent={richTextRight} />
				</div>
			</div>
		</div>
	)
}

export const twoColumnTemplate: Template = {
	name: 'twoColumn',
	label: 'Two Column',
	fields: [
		{
			name: 'heading',
			label: 'Heading',
			type: 'string',
		},
		{
			name: 'richTextLeft',
			type: 'rich-text',
			label: 'Rich Text - Left',
			isBody: true,
			templates: [
				{
					name: 'YoutubeEmbed',
					label: 'Embed YouTube Video',
					fields: [
						{
							name: 'url',
							type: 'string',
							label: 'URL',
						},
					],
				},
				{
					name: 'ColoredText',
					label: 'Colored Text',
					inline: true,
					fields: [
						{
							name: 'text',
							type: 'string',
							label: 'Text',
						},
						{
							name: 'color',
							type: 'string',
							label: 'Text Color',
							ui: {
								component: ColorSelector,
							},
						},
					],
				},
			],
		},
		{
			name: 'richTextRight',
			type: 'rich-text',
			label: 'Rich Text - Right',
			isBody: true,
			templates: [
				{
					name: 'YoutubeEmbed',
					label: 'Embed YouTube Video',
					fields: [
						{
							name: 'url',
							type: 'string',
							label: 'URL',
						},
					],
				},
				{
					name: 'ColoredText',
					label: 'Colored Text',
					inline: true,
					fields: [
						{
							name: 'text',
							type: 'string',
							label: 'Text',
						},
						{
							name: 'color',
							type: 'string',
							label: 'Text Color',
							ui: {
								component: ColorSelector,
							},
						},
					],
				},
			],
		},
	],
}
