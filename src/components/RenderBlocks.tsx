import type { Page } from '~tina/__generated__/types'
import { TakeActionContainer } from './blocks/TakeAction'
import { TeamGalleryContainer } from './blocks/TeamGallery'
import { NewsSupporters } from './blocks/NewsSupporters'
import { CarouselContainer } from './blocks/Carousel'
import { FooterContainer } from './blocks/Footer'
import { LookingForContainer } from './blocks/LookingFor'
import { TitleImageGrid } from './blocks/layout/TitleImageGrid'
import { Header } from './blocks/layout/Header'

export const Blocks = (props: Omit<Page, 'id' | '_sys' | '_values'>) => {
	return (
		<>
			{props.blocks
				? props.blocks.map((block, i: number) => {
						switch (block?.__typename) {
							case 'PageBlocksActions':
								return (
									<div key={i + block.__typename} className='w-full'>
										<TakeActionContainer data={block} />
									</div>
								)
							case 'PageBlocksTeamGallery':
								return (
									<div key={i + block.__typename} className='w-full'>
										<TeamGalleryContainer data={block} />
									</div>
								)
							case 'PageBlocksNewsSupporters':
								return (
									<div key={i + block.__typename} className='w-full bg-inreach-light-grey'>
										<NewsSupporters data={block} />
									</div>
								)
							case 'PageBlocksCarousel':
								return (
									<div key={i + block.__typename} className='w-full'>
										<CarouselContainer data={block} />
									</div>
								)
							case 'PageBlocksFooter':
								return (
									<div key={i + block.__typename} className='w-full'>
										<FooterContainer data={block} />
									</div>
								)
							case 'PageBlocksLookingFor':
								return (
									<div key={i + block.__typename} className='w-full'>
										<LookingForContainer data={block} />
									</div>
								)
							case 'PageBlocksTitleImageGrid':
								return (
									<div key={i + block.__typename} className='w-full'>
										<TitleImageGrid data={block} />
									</div>
								)
							case 'PageBlocksHeader':
								return (
									<div key={i + block.__typename} className='w-full'>
										<Header data={block} />
									</div>
								)
						}
					})
				: null}
		</>
	)
}
