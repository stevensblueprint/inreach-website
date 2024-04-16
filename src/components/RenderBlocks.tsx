import type { Page } from '~tina/__generated__/types'
import { TakeActionContainer } from './blocks/TakeAction'
import { TeamGalleryContainer } from './blocks/TeamGallery'
import {NewsSupporters} from './blocks/NewsSupporters'
import { CarouselContainer } from './blocks/Carousel'

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
                  <div key={i + block.__typename} className='w-full'>
                    <NewsSupporters data={block} />
                  </div>
                )
							case 'PageBlocksCarousel':
								return (
									<div key={i + block.__typename} className='w-full'>
										<CarouselContainer data={block} />
									</div>
								)
						}
					})
				: null}
		</>
	)
}
