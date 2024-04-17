import React from 'react'
import { Button } from '@mantine/core'
import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text'
import type {
    PageBlocksFooter
} from '~tina/__generated__/types'


export const FooterContainer = ({ data }: { data: PageBlocksFooter }) => {
    const description = data.description || ''; // Provide a default value for data.description if it is undefined
    return (
        <footer className='bg-gray-800 text-white p-4'>
            <div className='container mx-auto'>
                <h2 className='text-2xl font-bold'>{data.header}</h2>
                <TinaMarkdown content={description as unknown as TinaMarkdownContent} />
                <Button color='blue'>Get Started</Button>
            </div>
        </footer>
    )
}

export const footerTemplate = {
    name: 'footer',
    label: 'Footer',
    fields: [
        {
			name: 'header',
			type: 'string',
			label: 'Header',
		},
		{
			name: 'description',
			type: 'string',
			label: 'Header Description',
		},
    ]
}
