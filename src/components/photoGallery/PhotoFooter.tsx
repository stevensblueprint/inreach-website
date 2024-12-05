import React from 'react'

interface FooterProps {
	currentIndex: number
	totalImages: number
}

const PhotoFooter: React.FC<FooterProps> = ({ currentIndex, totalImages }) => (
	<footer className='absolute bottom-1 left-1/2 transform -translate-x-1/2 my-3 py-1 px-4 text-white font-bold bg-black bg-opacity-90 rounded-lg'>
		<h2 className='my-1 text-center'>
			{currentIndex + 1} / {totalImages}
		</h2>
	</footer>
)

export default PhotoFooter
