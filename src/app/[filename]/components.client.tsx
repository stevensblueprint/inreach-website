'use client'

import { Blocks } from '@/components/RenderBlocks'
import { notFound } from 'next/navigation'
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
		<div className='flex min-h-screen items-start justify-center gap-4 flex-col'>
			{data === null && notFound()}
			{data && data.page && <Blocks {...data.page} />}
		</div>
	)
}
