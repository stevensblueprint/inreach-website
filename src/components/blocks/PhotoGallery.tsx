import { useState } from 'react'
import Lightbox, { ImagesListType } from 'react-spring-lightbox'
import { Template } from 'tinacms'
import { PageBlocksPhotoGallery } from '~tina/__generated__/types'
import { Button } from '@mantine/core'
import { Gallery, Image } from 'react-grid-gallery'
import LightBoxWrapper from '../photoGallery/LightBoxWrapper'

export const images: ImagesListType & Image[] = [
	{
		src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
		width: 320,
		height: 174,
		alt: 'After Rain (Jeshu John - designerspics.com)',
	},
	{
		src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
		width: 320,
		height: 212,
		alt: 'Boats (Jeshu John - designerspics.com)',
	},
	{
		src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
		width: 320,
		height: 212,
		alt: 'Color Pencils (Jeshu John - designerspics.com)',
	},
	{
		src: 'https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg',
		width: 320,
		height: 213,
		alt: 'Red Apples with other Red Fruit (foodiesfeed.com)',
	},
	{
		src: 'https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg',

		width: 320,
		height: 183,
		alt: '37H (gratispgraphy.com)',
	},
	{
		src: 'https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg',
		width: 240,
		height: 320,
		alt: '8H (gratisography.com)',
	},
	{
		src: 'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg',
		width: 320,
		height: 190,
		alt: '286H (gratisography.com)',
	},
	{
		src: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg',
		width: 320,
		height: 148,

		alt: '315H (gratisography.com)',
	},
	{
		src: 'https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg',
		width: 320,
		height: 213,
		alt: '201H (gratisography.com)',
	},
	{
		src: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg',
		width: 248,
		height: 320,
		alt: 'Big Ben (Tom Eversley - isorepublic.com)',
	},
	{
		src: 'https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg',
		width: 320,
		height: 113,
		alt: 'Red Zone - Paris (Tom Eversley - isorepublic.com)',
	},
	{
		src: 'https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg',
		width: 313,
		height: 320,
		alt: 'Wood Glass (Tom Eversley - isorepublic.com)',
	},
	{
		src: 'https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg',
		width: 320,
		height: 213,
		alt: 'Flower Interior Macro (Tom Eversley - isorepublic.com)',
	},
	{
		src: 'https://c4.staticflickr.com/9/8562/28897228731_ff4447ef5f_b.jpg',
		width: 320,
		height: 194,
		alt: 'Old Barn (Tom Eversley - isorepublic.com)',
	},
	{
		src: 'https://c2.staticflickr.com/8/7577/28973580825_d8f541ba3f_b.jpg',
		width: 320,
		height: 213,
		alt: 'Cosmos Flower Macro (Tom Eversley - isorepublic.com)',
	},
	{
		src: 'https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg',
		width: 271,
		height: 320,
		alt: 'Orange Macro (Tom Eversley - isorepublic.com)',
	},
	{
		src: 'https://c1.staticflickr.com/9/8330/28941240416_71d2a7af8e_b.jpg',
		width: 320,
		height: 213,
		alt: 'Surfer Sunset (Tom Eversley - isorepublic.com)',
	},
	{
		src: 'https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg',
		width: 320,
		height: 213,
		alt: 'Man on BMX (Tom Eversley - isorepublic.com)',
	},
	{
		src: 'https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg',

		width: 320,
		height: 213,
		alt: 'Ropeman - Thailand (Tom Eversley - isorepublic.com)',
	},
	{
		src: 'https://c4.staticflickr.com/8/7476/28973628875_069e938525_b.jpg',
		width: 320,
		height: 213,
		alt: 'Time to Think (Tom Eversley - isorepublic.com)',
	},
	{
		src: 'https://c6.staticflickr.com/9/8593/28357129133_f04c73bf1e_b.jpg',
		width: 320,
		height: 179,
		alt: 'Untitled (Jan Vasek - jeshoots.com)',
	},
	{
		src: 'https://c6.staticflickr.com/9/8893/28897116141_641b88e342_b.jpg',
		width: 320,
		height: 215,
		alt: 'Untitled (moveast.me)',
	},
	{
		src: 'https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg',
		width: 257,
		height: 320,
		alt: 'A photo by 贝莉儿 NG. (unsplash.com)',
	},
	{
		src: 'https://c7.staticflickr.com/9/8824/28868764222_19f3b30773_b.jpg',

		width: 226,
		height: 320,
		alt: 'A photo by Matthew Wiebe. (unsplash.com)',
	},
]

export const PhotoGallery = ({ data }: { data: PageBlocksPhotoGallery }) => {
	const [currentImageIndex, setCurrentIndex] = useState(0)
	const [isOpen, setOpen] = useState(false)

	return (
		<>
			<div className='w-full mx-auto max-w-7xl'>
				<div className='relative'>
					<Gallery
						images={images}
						onClick={(index) => {
							setCurrentIndex(index)
							setOpen(true)
						}}
						enableImageSelection={false}
						rowHeight={300}
					/>
					<LightBoxWrapper
						galleryTitle='Photo Gallery'
						isOpen={isOpen}
						currentImageIndex={currentImageIndex}
						setCurrentIndex={setCurrentIndex}
						onClose={() => setOpen(false)}
						images={images}
					/>
				</div>
			</div>
		</>
	)
}

export const photoGalleryTemplate: Template = {
	name: 'photoGallery',
	label: 'Photo Gallery',
	fields: [
		{
			name: 'photos',
			type: 'object',
			label: 'Photos',
			list: true,
			ui: {
				itemProps: (item) => {
					return {
						label: item?.slideTitle,
					}
				},
				defaultItem: {
					photoTitle: 'Photo Title',
					photo: '/home/Homepage.jpg',
				},
			},
			fields: [
				{
					name: 'photoTitle',
					type: 'string',
					label: 'Photo Title',
				},
				{
					name: 'photo',
					type: 'image',
					label: 'Photo',
				},
			],
		},
	],
}
