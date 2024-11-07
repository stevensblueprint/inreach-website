import type { Template } from 'tinacms'
import { TinaMarkdown, type TinaMarkdownContent } from 'tinacms/dist/rich-text'
import { PageBlocksTwoColumn } from '~tina/__generated__/types'
import { ColorSelector } from '../../fields/ColorSelector/ColorSelector'
import {
	tinaMarkdownComponents,
	tinaMarkdownComponentsRichTextTemplate,
} from '../../fields/TinaMarkdownComponents/TinaMarkdownComponents'

const ColumnContent = ({ richTextContent }: { richTextContent: TinaMarkdownContent }) => {
	return (
		<div className='w-full md:w-1/2 flex flex-col grow justify-center prose prose-headings:my-6 prose-p:my-2'>
			<TinaMarkdown components={tinaMarkdownComponents} content={richTextContent} />
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
			templates: tinaMarkdownComponentsRichTextTemplate,
		},
		{
			name: 'richTextRight',
			type: 'rich-text',
			label: 'Rich Text - Right',
			isBody: true,
			templates: tinaMarkdownComponentsRichTextTemplate,
		},
	],
}
