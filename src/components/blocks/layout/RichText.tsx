import type { Template } from 'tinacms'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { PageBlocksRichText } from '~tina/__generated__/types'
import {
	tinaMarkdownComponents,
	tinaMarkdownComponentsRichTextTemplate,
} from '../../fields/TinaMarkdownComponents/TinaMarkdownComponents'

export const RichText = ({ data }: { data: PageBlocksRichText }) => {
	const { richTextContent } = data
	return (
		<div className='w-full flex ustify-center items-center p-10'>
			<div className='w-full max-w-7xl'>
				<div className='w-full flex flex-col md:flex-row gap-10 justify-center'>
					<div className='w-full md:w-1/2 flex flex-col grow justify-center prose prose-headings:my-6 prose-p:my-2'>
						<TinaMarkdown components={tinaMarkdownComponents} content={richTextContent} />
					</div>
				</div>
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
	],
}
