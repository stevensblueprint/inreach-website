import Image from 'next/image'
import { inputProseClasses } from '../../../components/fields/ColorSelector/colors'
import { ColorSelector } from '../../../components/fields/ColorSelector/ColorSelector'
import { cn } from '../../../lib/utils'
import React from 'react'
import { Template } from 'tinacms'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { PageBlocksTitleImageGrid } from '~tina/__generated__/types'
import { SimpleGrid } from '@mantine/core'

export const TitleImageGrid = ({ data }: { data: PageBlocksTitleImageGrid }) => {
	const bgColor = data.titleImageGridHeader?.titleBackgroundColor || 'white'
	return (
		<section className='w-full flex flex-col items-center py-6' style={{ background: bgColor }}>
			{data.titleImageGridHeader && (
				<div
					className={cn(
						'w-full prose prose-headings:m-0 prose-p:m-0 max-w-none text-center mb-4',
						data.titleImageGridHeader.titleTextColor &&
							inputProseClasses[data.titleImageGridHeader.titleTextColor]
					)}
				>
					<TinaMarkdown content={data.titleImageGridHeader.titleImageGridHeaderRich} />
				</div>
			)}
			{data.titleImageGridImage?.src && data.titleImageGridImage?.alt && (
        <div className='w-full max-h-[600px]'>
				  <Image src={data.titleImageGridImage.src} alt={data.titleImageGridImage.alt} width={800} height={600} className='mx-auto' />
        </div>
			)}
      {data.titleImageGridContent && data.titleImageGridContent?.length > 0 &&
        <SimpleGrid cols={{md: data.titleGridNum ? data.titleGridNum : 1, base: 1, sm: 3}} px={{sm: 24, base: 16}} className='max-w-7xl'>
          {data.titleImageGridContent.map((content, i) => {
            if (content)
            return (
              <div className={cn('w-full prose prose-headings:m-0 prose-p:m-0 flex flex-col gap-2 text-center', content.contentTextColor ? inputProseClasses[content.contentTextColor] : 'prose-headings:text-black prose-p:text-black')} key={i}>
                <TinaMarkdown content={content.titleImageGridContentRich} />
              </div>
            )
          })}
        </SimpleGrid>
      }
		</section>
	)
}

export const titleImageGridTemplate: Template = {
	name: 'titleImageGrid',
	label: 'Title Image Grid Layout',
	fields: [
		{
			name: 'titleImageGridHeader',
			type: 'object',
			label: 'Header',
			fields: [
				{
					name: 'titleImageGridHeaderRich',
					type: 'rich-text',
          isBody: true,
					label: 'Header Text',
				},
				{
					name: 'titleTextColor',
					type: 'string',
					label: 'Text Color',
					ui: {
						component: ColorSelector,
					},
				},
				{
					name: 'titleBackgroundColor',
					type: 'string',
					label: 'Background Color',
					ui: {
						component: 'color',
					},
				},
			],
		},
		{
			name: 'titleImageGridImage',
			type: 'object',
			label: 'Image',
			fields: [
				{
					name: 'src',
					type: 'image',
					label: 'Image',
				},
				{
					name: 'alt',
					type: 'string',
					label: 'Alt Text',
				},
			],
		},
		{
			name: 'titleImageGridContent',
			type: 'object',
			label: 'Content',
      list: true,
			fields: [
        {
          name: 'titleIGContentLabel',
          type: 'string',
          label: 'Content Label',
          description: 'This is the label for the content block shown in the CMS.'
        },
				{
					name: 'titleImageGridContentRich',
					type: 'rich-text',
          isBody: true,
					label: 'Body Text',
				},
				{
					name: 'contentTextColor',
					type: 'string',
					label: 'Text Color',
					ui: {
						component: ColorSelector,
					},
				},
			],
      ui: {
        itemProps: (item) => {
          return {
            label: item?.titleIGContentLabel ? item.titleIGContentLabel : 'Blank Content Label',
          }
        },
      }
		},
    {
      name: 'titleGridNum',
      type: 'number',
      label: 'Number of Items per Row',
      description: 'Number of items in one row. Will not work if less than 1.'
    }
	],
}
