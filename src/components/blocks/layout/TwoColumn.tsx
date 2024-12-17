import type { Template } from 'tinacms'
import { TinaMarkdown, type TinaMarkdownContent } from 'tinacms/dist/rich-text'
import { PageBlocksTwoColumn } from '~tina/__generated__/types'
import {
	tinaMarkdownComponents,
	tinaMarkdownComponentsRichTextTemplate,
} from '../../fields/TinaMarkdownComponents/TinaMarkdownComponents'

const ColumnContent = ({
	richTextContent,
	verticalAlignment,
}: {
	richTextContent: TinaMarkdownContent
	verticalAlignment: String
}) => {
	const verticalAlignmentClass =
		verticalAlignment === 'top'
			? 'justify-start'
			: verticalAlignment === 'bottom'
				? 'justify-end'
				: 'justify-center'

	return (
		<div
			className={`w-full md:w-1/2 flex flex-col grow ${verticalAlignmentClass} prose prose-headings:my-6 prose-p:my-2`}
		>
			<TinaMarkdown components={tinaMarkdownComponents} content={richTextContent} />
		</div>
	)
}

export const TwoColumn = ({ data }: { data: PageBlocksTwoColumn }) => {
	const { heading, richTextLeft, richTextRight, verticalAlignment } = data

	return (
		<div className={`w-full flex flex-col justify-center items-center p-10 bg-white`}>
			<div className='w-full max-w-7xl'>
				{heading && <h1 className='text-2xl uppercase pb-10 font-bold'>{heading}</h1>}
				<div className='w-full flex flex-col md:flex-row gap-10 justify-start'>
					<ColumnContent richTextContent={richTextLeft} verticalAlignment={verticalAlignment || ''} />
					<ColumnContent richTextContent={richTextRight} verticalAlignment={verticalAlignment || ''} />
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
			name: 'verticalAlignment',
			label: 'Vertical Alignment',
			type: 'string',
			options: [
				{ label: 'Top', value: 'top' },
				{ label: 'Middle', value: 'middle' },
				{ label: 'Bottom', value: 'bottom' },
			],
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
