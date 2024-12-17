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
		<div
			className={cn(
				'prose px-4 md:prose-h1:text-6xl prose-h1:text-4xl prose-headings:my-6 prose-p:my-2 max-w-7xl mx-auto flex flex-col gap-4',
				{
					'items-end w-full': data?.position === 'Right',
					'items-start w-full': data?.position === 'Left',
					'items-center text-center w-full': data?.position === 'Middle',
				}
			)}
		>
			<TinaMarkdown components={tinaMarkdownComponents} content={data?.richTextContent} />
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
