import { Image } from '@mantine/core'
import { Template } from 'tinacms'
import { PageBlocksHero } from '~tina/__generated__/types'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import {
	tinaMarkdownComponentsRichTextTemplate,
	tinaMarkdownComponents,
} from '../../../components/fields/TinaMarkdownComponents/TinaMarkdownComponents'
import { cn } from '../../../lib/utils'

export const Hero = ({ data }: { data: PageBlocksHero }) => {
	return (
		<>
			{data.heroBackgroundImage?.src && data.heroBackgroundImage?.alt && (
				<Image
					src={data.heroBackgroundImage.src}
					alt={data.heroBackgroundImage.alt}
					className='md:h-[480px] h-[300px]'
				/>
			)}
			<div
				className={cn('absolute prose top-1/2 transform -translate-y-1/2 px-6 md:prose-h1:text-6xl prose-h1:text-4xl max-w-none flex flex-col gap-4', {
					'right-0': data.heroHeaderText?.position === 'Right',
					'left-0': data.heroHeaderText?.position === 'Left',
          'left-1/2 transform -translate-x-1/2 w-2/3 text-center': data.heroHeaderText?.position === 'Middle'
				})}
			>
				<TinaMarkdown components={tinaMarkdownComponents} content={data.heroHeaderText?.text} />
			</div>
		</>
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
