import { Components } from 'tinacms/dist/rich-text'
import { textColorClasses } from '../ColorSelector/colors'
import { cn } from '../../../lib/utils'
import { ColorSelector } from '../ColorSelector/ColorSelector'
import type { RichTextTemplate } from '@tinacms/schema-tools'

// helper function to parse youtube video id from shared url
const ytParser = (url: string) => {
	var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
	var match = url.match(regExp)
	return match && match[7].length == 11 ? match[7] : false
}

export const tinaMarkdownComponents: Components<any> = {
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

export const tinaMarkdownComponentsRichTextTemplate: RichTextTemplate[] = [
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
]
