import { Template } from 'tinacms'
import { PageBlocksHero } from '~tina/__generated__/types'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import {
	tinaMarkdownComponentsRichTextTemplate,
	tinaMarkdownComponents,
} from '../../../components/fields/TinaMarkdownComponents/TinaMarkdownComponents'
import { cn } from '../../../lib/utils'

interface HexToRgba {
	(hex: string, alpha?: number): string
}

const hexToRgba: HexToRgba = (hex, alpha = 1) => {
	const hexValue = hex.startsWith('#') ? hex.slice(1) : hex
	const r = parseInt(hexValue.slice(0, 2), 16)
	const g = parseInt(hexValue.slice(2, 4), 16)
	const b = parseInt(hexValue.slice(4, 6), 16)

	return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export const Hero = ({ data }: { data: PageBlocksHero }) => {
	const { heroBackgroundImage, heroHeaderText } = data

	const backgroundStyle = {
		backgroundImage: heroBackgroundImage?.colorFilter
			? `linear-gradient(${hexToRgba(heroBackgroundImage.colorFilter, 0.65)}, ${hexToRgba(heroBackgroundImage.colorFilter, 0.65)}), url(${heroBackgroundImage?.src})`
			: `url(${heroBackgroundImage?.src})`,
	}

	return (
		<div
			className='relative flex items-center justify-center h-[300px] md:h-[480px] bg-cover bg-center'
			style={backgroundStyle}
		>
			<div
				className={cn(
					'prose px-4 md:prose-h1:text-6xl prose-h1:text-4xl prose-headings:my-6 prose-p:my-2 max-w-7xl flex flex-col gap-4',
					{
						'items-end w-full': heroHeaderText?.position === 'Right',
						'items-start w-full': heroHeaderText?.position === 'Left',
						'items-center text-center w-2/3': heroHeaderText?.position === 'Middle',
					}
				)}
			>
				<TinaMarkdown components={tinaMarkdownComponents} content={heroHeaderText?.text} />
			</div>
		</div>
	)
}

export const heroTemplate: Template = {
	name: 'hero',
	label: 'Hero Layout',
	fields: [
		{
			name: 'heroBackgroundImage',
			type: 'object',
			label: 'Hero Background Image',
			description: 'Image that is displayed in hero section. Must have alt text and image.',
			fields: [
				{
					name: 'src',
					type: 'image',
					label: 'Image',
				},
				{
					name: 'alt',
					type: 'string',
					label: 'Alt Text',
				},
				{
					name: 'colorFilter',
					type: 'string',
					label: 'Image color filter',
					ui: {
						component: 'color',
					},
				},
			],
		},
		{
			name: 'heroHeaderText',
			type: 'object',
			label: 'Hero Header Text',
			fields: [
				{
					name: 'text',
					type: 'rich-text',
					isBody: true,
					label: 'Header Text',
					templates: tinaMarkdownComponentsRichTextTemplate,
				},
				{
					name: 'darkenBackground',
					type: 'boolean',
					label: 'Darken Background',
				},
				{
					name: 'position',
					type: 'string',
					label: 'Position',
					description: 'Position of the header text',
					options: ['Left', 'Middle', 'Right'],
				},
			],
		},
	],
}
