// THIS FILE HAS BEEN GENERATED WITH THE TINA CLI.
// @ts-nocheck
// This is a demo file once you have tina setup feel free to delete this file

import client from '~tina/__generated__/client'
import { BlogPage } from './components.client'

interface PageParams {
	params: {
		filename: string
	}
}

const Page = async ({ params }: PageParams) => {
	console.log('pageParams', params)
	const tinaData = await getTinaPost(params)

	return <BlogPage {...tinaData} />
}
const getTinaPost = async (params: PageParams) => {
	console.log('gitTinaPost paramss', params)
	let data = {}
	let query = {}
	let variables = { relativePath: `${params.filename}.md` }
	try {
		const res = await client.queries.post(variables)
		console.log('tina response', res)
		query = res.query
		data = res.data
		variables = res.variables
	} catch (err) {
		console.error(err)
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
