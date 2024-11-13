import React from 'react'
import { IoIosClose } from 'react-icons/io'

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
	<header className='z-10 flex justify-between p-3 px-10 text-gray-100 bg-opacity-50 bg-black'>
		<div className='flex flex-col justify-center pl-2 border-l-4 border-inreach-ally-green'>
			<h2 className='mb-1 font-bold'>{galleryTitle}</h2>
			<h4 className='font-semibold text-gray-600'>{images[currentIndex].alt}</h4>
		</div>

		<div className='flex items-center justify-between'>
			{/* Add "Share button" or maybe just download button*/}
			<Button
				onClick={onClose}
				type='button'
				className='flex items-center justify-center h-full wborder-l-4 p-1 bg-inreach-cornflower'
			>
				<IoIosClose size={60} />
			</Button>
		</div>
	</header>
)

export default PhotoHeader
