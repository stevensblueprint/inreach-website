import { useState, useMemo } from 'react'
import Lightbox, { ImagesListType } from 'react-spring-lightbox'
import { Template } from 'tinacms'
import { PageBlocksPhotoGallery } from '~tina/__generated__/types'
import { Button } from '@mantine/core'
import { Gallery, Image } from 'react-grid-gallery'
import LightBoxWrapper from '../photoGallery/LightBoxWrapper'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import {
	tinaMarkdownComponents,
	tinaMarkdownComponentsRichTextTemplate,
} from '../fields/TinaMarkdownComponents/TinaMarkdownComponents'

// Width and height values come from marketing materials
const photoWidth = 1545
const photoHeight = 2000

export const PhotoGallery = ({ data }: { data: PageBlocksPhotoGallery }) => {
	const [currentImageIndex, setCurrentIndex] = useState(0)
	const [isOpen, setOpen] = useState(false)
	const { galleryHeader, lightBoxGalleryHeader, photos } = data

	// Format photos to lightbox + react gallery format
	const formattedPhotos: ImagesListType & Image[] = useMemo(() => {
		if (!photos) return []

		return photos.map((photo, i) => {
			return {
				src: photo?.photo ?? '',
				width: photoWidth,
				height: photoHeight,
				alt: photo?.photoTitle ? photo.photoTitle : `Photo ${i + 1}`,
			}
		})
	}, [photos])

	return (
		<>
			<div className='w-full mx-auto max-w-7xl px-4'>
				<div className='w-full flex flex-col grow justify-center prose prose-headings:my-6 prose-p:my-2'>
					<TinaMarkdown components={tinaMarkdownComponents} content={galleryHeader} />
				</div>
				{photos && (
					<div className='relative'>
						<Gallery
							images={formattedPhotos}
							onClick={(index) => {
								setCurrentIndex(index)
								setOpen(true)
							}}
							enableImageSelection={false}
							rowHeight={300}
							margin={4}
						/>
						<LightBoxWrapper
							galleryTitle={lightBoxGalleryHeader ? lightBoxGalleryHeader : ''}
							isOpen={isOpen}
							currentImageIndex={currentImageIndex}
							setCurrentIndex={setCurrentIndex}
							onClose={() => setOpen(false)}
							images={formattedPhotos}
						/>
					</div>
				)}
			</div>
		</>
	)
}

/**
 * Template for the Photo Gallery block
 *
 * - Defines the structure and fields for a photo gallery block in TinaCMS.
 *
 * Fields:
 *
 * - GalleryHeader: rich-text field for the gallery header.
 * - LightBoxGalleryHeader: string field for the lightbox gallery header used in lightbox view.
 * - Photos: object field that contains a list of photos. Each photo has:
 *
 *   - PhotoTitle: string field for the photo title.
 *   - Photo: image field for the photo.
 *
 * The `itemProps` function sets the label for each photo item in the list. The `defaultItem` object provides
 * default values for a new photo item.
 */
export const photoGalleryTemplate: Template = {
	name: 'photoGallery',
	label: 'Photo Gallery',
	fields: [
		{
			name: 'galleryHeader',
			type: 'rich-text',
			label: 'Gallery Header',
			templates: tinaMarkdownComponentsRichTextTemplate,
		},
		{
			name: 'lightBoxGalleryHeader',
			type: 'string',
			label: 'Lightbox Gallery Header',
		},
		{
			name: 'photos',
			type: 'object',
			label: 'Photos',
			list: true,
			ui: {
				itemProps: (item) => {
					return {
						label: item?.photoTitle,
					}
				},
				defaultItem: {
					photoTitle: 'Photo Title',
					photo: '/marketing-materials/english/english-1.png',
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
