import type { RichTextType, Template } from 'tinacms'
import { PageBlocksOurImpact } from '~tina/__generated__/types'

export const OurImpact = ({ data }: { data: PageBlocksOurImpact }) => {
	return <div>OurImpact</div>
}

export const OurImpactContainer = ({ data }: { data: PageBlocksOurImpact }) => {
	return <div>OurImpact</div>
}

// template for a side by side layout with an image or video on the left and rich-text on the right
export const ourImpactTemplate: Template = {
	name: 'ourImpact',
	label: 'Our Impact',
	fields: [
		{
			name: 'contentImage',
			label: 'Content Image',
			type: 'image',
		},
		{
			name: 'heading',
			label: 'Heading',
			type: 'string',
		},
		{
			name: 'content',
			label: 'Content',
			type: 'string',
		},
	],
}
