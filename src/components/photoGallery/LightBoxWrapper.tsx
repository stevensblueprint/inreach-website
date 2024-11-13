import React from 'react'
import Lightbox, { ImagesListType } from 'react-spring-lightbox'
import ArrowButton from './ArrowButton'
import PhotoHeader from './PhotoHeader'
import PhotoFooter from './PhotoFooter'

const LightBoxWrapper = ({
	galleryTitle = '',
	images,
	currentImageIndex,
	setCurrentIndex,
	isOpen,
	onClose,
}: {
	galleryTitle: string
	images: ImagesListType
	currentImageIndex: number
	setCurrentIndex: Function
	isOpen: boolean
	onClose: () => void
}) => {
	const gotoPrevious = () => currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1)

	const gotoNext = () => currentImageIndex + 1 < images.length && setCurrentIndex(currentImageIndex + 1)

	return (
		<div className='w-full relative'>
			<Lightbox
				className='bg-opacity-90 bg-black'
				isOpen={isOpen}
				onPrev={gotoPrevious}
				onNext={gotoNext}
				onClose={onClose}
				images={images}
				currentIndex={currentImageIndex}
				singleClickToZoom
				renderFooter={() => <PhotoFooter currentIndex={currentImageIndex} totalImages={images.length} />}
				renderHeader={() => (
					<PhotoHeader
						galleryTitle={galleryTitle}
						images={images}
						currentIndex={currentImageIndex}
						onClose={onClose}
					/>
				)}
				renderPrevButton={({ canPrev }) => (
					<ArrowButton position='left' onClick={gotoPrevious} disabled={!canPrev} />
				)}
				renderNextButton={({ canNext }) => (
					<ArrowButton position='right' onClick={gotoNext} disabled={!canNext} />
				)}
			/>
		</div>
	)
}

export default LightBoxWrapper
