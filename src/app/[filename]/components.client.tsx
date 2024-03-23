"use client"

import { Blocks } from "@/components/RenderBlocks"
import { useTina } from "tinacms/dist/react"

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
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-10">
      <h1>{data.page.title}</h1>
      <Blocks {...data.page} />
    </div>
  )
}
