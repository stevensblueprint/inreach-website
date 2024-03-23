// @ts-nocheck

import client from '~tina/__generated__/databaseClient'
import { RenderedPage } from './components.client'

type PageParams = {
	params: {
		filename: string
	}
}

const Page = async ({ params }: PageParams) => {
	const tinaData = await getTinaPage(params)
  return <RenderedPage {...tinaData}/>
}
const getTinaPage = async (params: PageParams) => {
	let data = {}
	let query = {}
	let variables = { relativePath: `${params.filename}.mdx` }
	try {
		const res = await client.queries.page(variables)
		query = res.query
		data = JSON.parse(JSON.stringify(res.data))
		variables = res.variables
	} catch (err) {
		console.log(err)
	}

	return {
		props: {
			variables: variables,
			data: data,
			query: query,
		},
	}
}

// export const generateStaticParams = async () => {
// 	const postsListData = await client.queries.postConnection()
// 	return postsListData.data.postConnection.edges.map((post) => ({
// 		filename: post.node._sys.filename,
// 	}))
// }
export default Page
