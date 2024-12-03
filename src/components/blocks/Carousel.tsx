import React, { useRef } from 'react'
import type { Template } from 'tinacms'
import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text'
import { Button } from '@mantine/core'
import Link from 'next/link'
import { Carousel as MantineCarousel } from '@mantine/carousel'
import Autoplay from 'embla-carousel-autoplay'
import '@mantine/carousel/styles.css'
import { cn } from '../../lib/utils'
import { PageBlocksCarousel } from '~tina/__generated__/types'
import classes from '../carousel/Controls.module.css'

const components = {
	ActionButton: ({ text, link }: { text: string; link: string }) => {
		return (
			<Button
				variant='filled'
				className='ml-auto mr-auto bg-inreach-ally-green border-inreach-white text-white transition-colors hover:bg-inreach-white hover:border-inreach-ally-green hover:text-inreach-ally-green'
				component={Link}
				href={{ pathname: link }}
				size='md'
			>
				{text}
			</Button>
		)
	},
}

// center all content on slides, parent should be Carousel.Slide
const CarouselSlide = ({
	index,
	slideTitle,
	slideContent,
	actionButton,
	backgroundImage,
	darken = true,
	animate = true,
}: {
	index: number
	slideTitle: string
	slideContent: string
	actionButton?: TinaMarkdownContent
	backgroundImage: string
	darken?: boolean
	animate?: boolean
}) => {
	const backgroundStyle = {
		backgroundImage: darken
			? `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${backgroundImage})`
			: `url(${backgroundImage})`,
	}

	return (
		<MantineCarousel.Slide className='relative w-full h-full overflow-hidden'>
			<div
				className={cn('absolute w-full h-full bg-cover bg-center', {
					'motion-safe:animate-zoom-constant': animate,
				})}
				style={backgroundStyle}
			></div>
			<div className='h-full w-full flex flex-col justify-center items-center gap-3 px-10 font-sans'>
				<div className='flex flex-col justify-center max-w-[700px] animate-fade-up'>
					{slideTitle && (
						<h1
							className={cn('font-bold text-center mb-8 lg:px-20', {
								'md:text-9xl text-7xl text-inreach-ally-green': index === 0,
								'lg:text-7xl text-6xl text-inreach-white px-8': index !== 0,
							})}
						>
							{slideTitle}
						</h1>
					)}
					{slideContent && (
						<p className='md:text-2xl text-inreach-white text-xl px-4 text-center lg:leading-[1.5em]'>
							{slideContent}
						</p>
					)}
					{actionButton && (
						<div className='mt-14 ml-auto mr-auto'>
							<TinaMarkdown components={components} content={actionButton} />
						</div>
					)}
				</div>
			</div>
		</MantineCarousel.Slide>
	)
}

export const Carousel = ({ data }: { data: PageBlocksCarousel }) => {
	const autoplay = useRef(Autoplay({ delay: 10000 }))

	return (
		<div className='flex flex-col justify-between items-center gap-3 min-w-full bg-transparent'>
			<MantineCarousel
				height={760}
				classNames={classes}
				className='w-full cursor-grab'
				loop
				plugins={[autoplay.current]}
				onMouseEnter={autoplay.current.stop}
				onMouseLeave={autoplay.current.reset}
			>
				{data?.slides &&
					data.slides.map((slide, index) => (
						<CarouselSlide
							key={index}
							index={index !== undefined ? index : 1}
							slideTitle={slide?.slideTitle ? slide.slideTitle : ''}
							slideContent={slide?.slideContent ? slide.slideContent : ''}
							actionButton={slide?.actionButton ? slide.actionButton : {}}
							backgroundImage={slide?.backgroundImage ? slide.backgroundImage : ''}
							darken={slide && slide.darken !== null ? slide.darken : true}
							animate={slide && slide.animate !== null ? slide.animate : true}
						/>
					))}
			</MantineCarousel>
		</div>
	)
}

export const CarouselContainer = ({ data }: { data: PageBlocksCarousel }) => {
	return <Carousel data={data} />
}

export const carouselTemplate: Template = {
	name: 'carousel',
	label: 'Carousel',
	ui: {
		defaultItem: {
			slides: [
				{
					slideTitle: 'Slide Title',
					slideContent: 'Slide Content',
					backgroundImage: '/home/Homepage.jpg',
					darken: true,
					animate: true,
					actionButton: {
						type: 'root',
						children: [
							{
								type: 'mdxJsxFlowElement',
								name: 'ActionButton',
								props: {
									text: 'Button Text',
									link: '/',
								},
							},
						],
						props: {
							text: 'Button Text',
							link: '/',
						},
					},
				},
			],
		},
	},
	fields: [
		{
			name: 'slides',
			type: 'object',
			label: 'Slides',
			list: true,
			ui: {
				itemProps: (item) => {
					return {
						label: item?.slideTitle,
					}
				},
				defaultItem: {
					slideTitle: 'Slide Title',
					slideContent: 'Slide Content',
					backgroundImage: '/home/Homepage.jpg',
					darken: true,
					animate: true,
					actionButton: {
						type: 'root',
						children: [
							{
								type: 'mdxJsxFlowElement',
								name: 'ActionButton',
								props: {
									text: 'Button Text',
									link: '/',
								},
							},
						],
						props: {
							text: 'Button Text',
							link: '/',
						},
					},
				},
			},
			fields: [
				{
					name: 'backgroundImage',
					type: 'image',
					label: 'Background Image',
				},
				{
					name: 'slideTitle',
					type: 'string',
					label: 'Slide Title',
				},
				{
					name: 'slideContent',
					type: 'string',
					label: 'Slide Content',
				},
				{
					name: 'darken',
					type: 'boolean',
					label: 'Darken Background',
				},
				{
					name: 'animate',
					type: 'boolean',
					label: 'Animate Background',
				},
				{
					name: 'actionButton',
					type: 'rich-text',
					label: 'Action Button',
					isBody: true,
					templates: [
						{
							name: 'ActionButton',
							label: 'Action Button',
							fields: [
								{
									type: 'string',
									name: 'text',
									label: 'Action Button Text',
								},
								{
									type: 'string',
									name: 'link',
									label: 'Button Link',
									required: true,
								},
							],
						},
					],
				},
			],
		},
	],
}
