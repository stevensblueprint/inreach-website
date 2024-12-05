import React from 'react'
import { IoIosClose, IoMdDownload } from 'react-icons/io'

import { Button } from '@mantine/core'

interface Image {
	src: string
	alt: string
}

interface PhotoHeaderProps {
	galleryTitle: string
	images: Image[]
	currentIndex: number
	onClose: () => void
}

const PhotoHeader: React.FC<PhotoHeaderProps> = ({ galleryTitle, images, currentIndex, onClose }) => (
	<header className='z-10 flex justify-between p-3 px-4 md:px-10 text-gray-100 bg-opacity-50 bg-black'>
		<div className='flex flex-col justify-center pl-2 border-l-4 border-inreach-ally-green'>
			{galleryTitle && <h2 className='mb-1 font-bold'>{galleryTitle}</h2>}
			<h4 className='font-semibold text-gray-200'>{images[currentIndex].alt}</h4>
		</div>

		<div className='flex items-center justify-between'>
			{/* Download button */}
			<a
				href={images[currentIndex].src}
				download
				className='flex items-center justify-center h-full p-1 text-inreach-cornflower mr-2'
			>
				<IoMdDownload size={40} />
			</a>
			{/* Close button */}
			<Button
				onClick={onClose}
				type='button'
				className='flex items-center justify-center h-full wborder-l-4 p-1 bg-inreach-cornflower'
			>
				<IoIosClose size={40} />
			</Button>
		</div>
	</header>
)

export default PhotoHeader
