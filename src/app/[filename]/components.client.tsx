'use client'

import { Blocks } from '@/components/RenderBlocks'
import { useTina } from 'tinacms/dist/react'

type TinaData = {
	props: {
		variables: {
			relativePath: string
		}
		data: {
			page: {
				title: string
				blocks: []
			}
		}
		query: string
	}
}

export const RenderedPage = ({ props }: TinaData) => {
	const { data } = useTina({
		query: props.query,
		variables: props.variables,
		data: props.data,
	})

	return (
		<div className='flex min-h-screen items-start justify-center gap-4 md:p-10 p-5 flex-col'>
			{data.page && <Blocks {...data.page} />}
		</div>
	)
}
