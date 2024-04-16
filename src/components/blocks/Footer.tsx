import React from 'react'
import { Button } from '@mantine/core'
import { TinaMarkdown } from 'tinacms/dist/rich-text'


export const FooterContainer = ({ data }: { data: Footer }) => {
    return (
        <footer className='bg-gray-900 text-white'>
            <div className='container mx-auto py-12'>
                <div className='flex flex-col gap-6'>
                    {data.header && <h1 className='uppercase md:text-4xl font-bold text-2xl'>{data.header}</h1>}
                    {data.description && <p className='md:text-xl text-lg'>{data.description}</p>}
                    {data.links && (
                        <div className='flex flex-col gap-4 md:text-xl text-lg'>
                            {data.links.map((link: { url: any; text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined }, i: any) => {
                                if (link)
                                    return (
                                        <Button
                                            variant='link'
                                            ref={link.url}
                                            key={link.url + i}
                                            className='uppercase rounded-none flex flex-1 justify-center items-center min-w-max md:text-lg text-sm'
                                        >
                                            {link.text}
                                        </Button>
                                    )
                            })}
                        </div>
                    )}
                </div>
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
