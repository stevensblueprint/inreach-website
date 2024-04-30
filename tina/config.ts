import { UsernamePasswordAuthJSProvider, TinaUserCollection } from 'tinacms-authjs/dist/tinacms'
import { defineConfig, LocalAuthProvider } from 'tinacms'
import { takeActionBlockTemplate } from '../src/components/blocks/TakeAction'
import { teamGalleryTemplate } from '../src/components/blocks/TeamGallery'
import { newsSupportersTemplate } from '../src/components/blocks/NewsSupporters'
import { carouselTemplate } from '../src/components/blocks/Carousel'
import { footerTemplate } from '../src/components/blocks/Footer'
import { lookingForTemplate } from '../src/components/blocks/LookingFor'
import { titleImageGridTemplate } from '../src/components/blocks/layout/TitleImageGrid'
import { headerTemplate } from '../src/components/blocks/layout/Header'

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === 'true'
// Your hosting provider likely exposes this as an environment variable
const branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || 'main'

export default defineConfig({
	contentApiUrlOverride: `/api/tina/gql`,
	authProvider: isLocal ? new LocalAuthProvider() : new UsernamePasswordAuthJSProvider(),
	branch,
	build: {
		outputFolder: 'admin',
		publicFolder: 'public',
	},
	media: {
		tina: {
			mediaRoot: '',
			publicFolder: 'public',
			static: true,
		},
	},
	// See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
	schema: {
		collections: [
			TinaUserCollection,
			{
				name: 'post',
				label: 'Posts',
				path: 'content/posts',
				fields: [
					{
						type: 'string',
						name: 'title',
						label: 'Title',
						isTitle: true,
						required: true,
					},
					{
						type: 'rich-text',
						name: 'body',
						label: 'Body',
						isBody: true,
					},
				],
				ui: {
					// This is an DEMO router. You can remove this to fit your site
					router: ({ document }) => `/tinademo/blog/${document._sys.filename}`,
				},
			},
			{
				name: 'page',
				label: 'Pages',
				path: 'content/pages',
				format: 'mdx',
				fields: [
					{
						type: 'string',
						label: 'Title',
						name: 'title',
						description: 'The title of the page. This is used to display the title in the CMS',
						isTitle: true,
						required: true,
					},
					{
						type: 'object',
						list: true,
						name: 'blocks',
						label: 'Sections',
						templates: [
							takeActionBlockTemplate,
							teamGalleryTemplate,
							newsSupportersTemplate,
							carouselTemplate,
							footerTemplate,
							lookingForTemplate,
							titleImageGridTemplate,
              headerTemplate
						],
					},
				],
				ui: {
					// This is an DEMO router. You can remove this to fit your site
					router: ({ document }) => {
						return `/${document._sys.filename}`
					},
				},
			},
		],
	},
})
