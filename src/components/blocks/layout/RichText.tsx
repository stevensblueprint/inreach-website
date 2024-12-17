import type { Template } from 'tinacms'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { PageBlocksRichText } from '~tina/__generated__/types'
import {
	tinaMarkdownComponents,
	tinaMarkdownComponentsRichTextTemplate,
} from '../../fields/TinaMarkdownComponents/TinaMarkdownComponents'
import { cn } from '../../../lib/utils'

export const RichText = ({ data }: { data: PageBlocksRichText }) => {
	return (
		<div className='max-w-[1360px] mx-auto p-10'>
			<div className='flex flex-col grow justify-center prose max-w-none prose-headings:my-6 prose-p:my-2 p'>
				<TinaMarkdown components={tinaMarkdownComponents} content={richTextContent} />
			</div>
		</div>
	)
}

export const richTextTemplate: Template = {
	name: 'richText',
	label: 'Rich Text',
	fields: [
		{
			name: 'richTextContent',
			type: 'rich-text',
			label: 'Rich Text',
			isBody: true,
			templates: tinaMarkdownComponentsRichTextTemplate,
		},
		{
			name: 'position',
			type: 'string',
			label: 'Position',
			description: 'Position of the text in the container.',
			options: ['Left', 'Middle', 'Right'],
		},
	],
}
