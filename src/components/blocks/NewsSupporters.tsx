import { cn } from '../../lib/utils'
import { Container, Image, SimpleGrid, Stack, Box } from '@mantine/core'
import { Template } from 'tinacms'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { PageBlocksNewsSupporters, PageBlocksNewsSupportersCompanies } from '~tina/__generated__/types'

export const NewsSupporters = ({ data }: { data: PageBlocksNewsSupporters }) => {
	return (
		<Container fluid className='max-w-7xl'>
			<Stack justify='center' align='center' gap={0}>
				{data.title && (
					<div className='prose text-center prose-stone prose-headings:m-0 prose-p:m-0 p-4'>
						<TinaMarkdown content={data.title} />
					</div>
				)}
				{data.companies && (
					<SimpleGrid cols={{ sm: data.numItems === 'five' ? 5 : 6, base: 3 }} maw={1120} spacing={0}>
						{data.companies.map((company, i) => {
							if (company?.logo && company?.name) {
								return (
									<Box key={i + company.name} p={15}>
										<Image
											src={company.logo}
											alt={company.name + ' Image'}
											className={cn('bg-white bg-clip-content shadow-lg', {
												'rounded-full max-w-[150px] hover:animate-bounceImage': data.format === 'circle',
												'rounded-lg max-w-[150px] hover:animate-bounceImage': data.format === 'square',
											})}
										/>
									</Box>
								)
							}
						})}
					</SimpleGrid>
				)}
			</Stack>
		</Container>
	)
}

export const newsSupportersTemplate: Template = {
	label: 'News and Supporters',
	name: 'newsSupporters',
	ui: {
		defaultItem: {
			numItems: 'five',
			format: 'circle',
		},
	},
	fields: [
		{
			name: 'format',
			label: 'Box Format',
			type: 'string',
			required: true,
			options: [
				{
					label: 'Square',
					value: 'square',
				},
				{
					label: 'Circle',
					value: 'circle',
				},
			],
		},
		{
			name: 'title',
			label: 'Title',
			type: 'rich-text',
			isBody: true,
		},
		{
			name: 'numItems',
			label: 'Number of Items per Row',
			type: 'string',
			required: true,
			options: [
				{
					label: 'Five',
					value: 'five',
				},
				{
					label: 'Six',
					value: 'six',
				},
			],
		},
		{
			type: 'object',
			name: 'companies',
			label: 'Companies or Supporters',
			list: true,
			ui: {
				itemProps: (item: PageBlocksNewsSupportersCompanies) => {
					return {
						label: item?.name as string,
					}
				},
				defaultItem: {
					name: 'Company Name',
					logo: 'https://via.placeholder.com/150',
				},
			},
			fields: [
				{
					type: 'string',
					name: 'name',
					label: 'Company or Supporter Name',
				},
				{
					type: 'image',
					name: 'logo',
					label: 'Logo',
				},
			],
		},
	],
}
