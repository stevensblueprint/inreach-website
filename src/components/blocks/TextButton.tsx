import { Template } from 'tinacms'
import {
	tinaMarkdownComponents,
	tinaMarkdownComponentsRichTextTemplate,
} from '../fields/TinaMarkdownComponents/TinaMarkdownComponents'
import { PageBlocksTextButton } from '~tina/__generated__/types'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { cn } from '../../lib/utils'
import { inputClasses } from '../fields/ColorSelector/colors'
import { ColorSelector } from '../fields/ColorSelector/ColorSelector'

export const TextButton = ({ data }: { data: PageBlocksTextButton }) => {
	return (
		<div className='grid grid-cols-12 gap-4'>
			<div className='col-start-5 col-span-5'>
				<div className='prose flex-grow max-w-full px-4'>
					<TinaMarkdown components={tinaMarkdownComponents} content={data.blockContent || ' '} />
				</div>
				<div className='flex justify-center mt-6'>
					<button
						className={cn(
							'text-white font-bold py-2 px-4 rounded',
							data.buttonBgColor ? data.buttonBgColor : inputClasses['Ally Green']
						)}
					>
						{data.buttonText}
					</button>
				</div>
			</div>
		</div>
	)
}

export const textButtonTemplate: Template = {
	name: 'textButton',
	label: 'Text Button Block',
	fields: [
		{
			name: 'blockContent',
			type: 'rich-text',
			templates: tinaMarkdownComponentsRichTextTemplate,
		},
		{
			name: 'buttonText',
			type: 'string',
			label: 'Button Text',
		},
		{
			name: 'buttonBgColor',
			type: 'string',
			label: 'Button Background Color',
			ui: {
				component: ColorSelector,
			},
		},
	],
}
