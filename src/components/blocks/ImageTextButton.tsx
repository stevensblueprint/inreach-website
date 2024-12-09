import { Template } from 'tinacms'
import { PageBlocksImagetextbutton } from '~tina/__generated__/types'
import { Icon } from '@iconify-icon/react'
import {
	tinaMarkdownComponents,
	tinaMarkdownComponentsRichTextTemplate,
} from '../fields/TinaMarkdownComponents/TinaMarkdownComponents'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { ColorSelector } from '../fields/ColorSelector/ColorSelector'
import { inputClasses, rawColorClasses } from '../fields/ColorSelector/colors'
import { cn } from '../../lib/utils'

export const ImageTextButtonBlock = ({ data }: { data: PageBlocksImagetextbutton }) => {
	return (
		<div className='grid grid-cols-6 gap-4'>
			<div className='col-start-3 col-span-2'>
				<div className='flex flex-row items-center justify-center'>
					<div className='flex-shrink-0 mr-6'>
						<Icon icon='rivet-icons:question-mark' width={60} height={60} />
					</div>
					<div className='prose flex-grow max-w-full px-4'>
						<TinaMarkdown components={tinaMarkdownComponents} content={data.blockContent || ''} />
					</div>
					<div className='flex-shrink-0'>
						<button
							className={cn(
								'text-white font-bold py-2 px-4 rounded',
								data.buttonBgColor ? inputClasses[data.buttonBgColor] : inputClasses['Ally Green']
							)}
						>
							{data.buttonText}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export const ImageTextButtonContainer = ({ data }: { data: PageBlocksImagetextbutton }) => {
	return <ImageTextButtonBlock data={data} />
}

export const imageTextButtonTemplate: Template = {
	name: 'imagetextbutton',
	label: 'Image Text Button Block',
	fields: [
		{
			name: 'blockContent',
			type: 'rich-text',
			label: 'Block Content',
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
