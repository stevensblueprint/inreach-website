import { Button } from '@mantine/core'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify-icon/react'
import type {
	PageBlocksTeamGallery,
	PageBlocksTeamGalleryRoles,
	PageBlocksTeamGalleryRolesEmployees,
	PageBlocksTeamGalleryRolesEmployeesSocials,
} from '~tina/__generated__/types'

export const TeamGalleryContainer = ({ data }: { data: PageBlocksTeamGallery }) => {
	const [selected, setSelected] = useState(data?.roles?.[0]?.roleName ?? null)

	return (
		<div className='flex flex-col gap-6'>
			{data.header && <h1 className='uppercase md:text-4xl font-bold text-2xl'>{data.header}</h1>}
			{data.description && <p className='md:text-xl text-lg'>{data.description}</p>}
			{data.roles && (
				<>
					<div className='w-full items-center flex justify-center my-4'>
						<div className='md:min-w-[90%] min-w-full'>
							<Button.Group style={{ flexWrap: 'wrap', width: '100%' }}>
								{data.roles.map((block, i) => {
									if (block)
										return (
											<Button
												variant={
													selected === null
														? 'default'
														: selected?.toUpperCase() === block.roleName.toUpperCase()
															? 'filled'
															: 'default'
												}
												onClick={() => {
													setSelected(block.roleName)
												}}
												key={block.roleName + i}
												className='uppercase rounded-none flex flex-1 justify-center items-center min-w-max md:text-lg text-sm'
											>
												{block.roleName}
											</Button>
										)
								})}
							</Button.Group>
						</div>
					</div>
					<div className='flex flex-col prose gap-4 md:text-xl text-lg'>
						{data.roles.map((block, z) => {
							if (block && block.roleName === selected) {
								return (
									<React.Fragment key={block.roleName + 'Fragment' + z}>
										<h1 className='uppercase text-3xl font-bold'>{block.roleName}</h1>
										<TinaMarkdown content={block.roleDescription} />
									</React.Fragment>
								)
							}
						})}
						{data.roles && (
							<div className='grid md:grid-cols-4 grid-cols-1 sm:p-6 gap-4'>
								{data.roles.map((block) => {
									if (block) {
										return block.employees && block.roleName === selected
											? block.employees.map((employee, l) => {
													if (employee !== null)
														return <EmployeeCards employee={employee} key={employee.fullName + l} />
												})
											: null
									}
								})}
							</div>
						)}
					</div>
				</>
			)}
		</div>
	)
}

export const EmployeeCards = ({ employee }: { employee: PageBlocksTeamGalleryRolesEmployees }) => {
	return (
		<>
			{employee && (
				<div className='flex flex-col items-center justify-start'>
					{employee.fullName && employee.image && (
						<Image src={employee.image} alt={employee.fullName + ' Image'} width={648} height={500} />
					)}
					<div className='p-2 flex flex-col w-full uppercase'>
						<p className='font-bold md:text-lg tracking-wider'>
							{employee.fullName &&
								employee.pronouns &&
								employee.fullName + ' (' + employee.pronouns.replace(/\s/g, '').split(',').join('/') + ')'}
						</p>
						<p className='text-sm mb-4'>{employee.description && employee.description}</p>
						{employee.socials && (
							<div className='flex gap-3 flex-wrap'>
								{employee.socials.map((social, i) => {
									if (social !== null) {
										return (
											social.link &&
											social.platform && (
												<Link
													href={{ pathname: social.link as string }}
													key={social.platform + i + employee.fullName}
													target='_blank'
												>
													{social.iconName && (
														<Icon
															icon={social.iconName}
															className='hover:scale-110 transition-all text-2xl'
															observe={false}
														/>
													)}
												</Link>
											)
										)
									}
								})}
							</div>
						)}
					</div>
				</div>
			)}
		</>
	)
}

export const teamGalleryTemplate = {
	name: 'teamGallery',
	label: 'Team Gallery',
	fields: [
		{
			name: 'header',
			type: 'string',
			label: 'Header',
		},
		{
			name: 'description',
			type: 'string',
			label: 'Header Description',
		},
		{
			type: 'object',
			label: 'Roles',
			name: 'roles',
			list: true,
			ui: {
				itemProps: (item: PageBlocksTeamGalleryRoles) => {
					return {
						label: item?.roleName,
					}
				},
				defaultItem: () => {
					return {
						roleName: 'Role Name',
						roleDescription: {
							type: 'root',
							children: [
								{
									type: 'p',
									children: [
										{
											type: 'text',
											text: 'This is the default role description.',
										},
									],
								},
							],
						},
					}
				},
			},
			fields: [
				{
					name: 'roleName',
					label: 'Role Name',
					type: 'string',
					description: 'To view with live changes, click the button that renders on the page.',
					required: true,
				},
				{
					name: 'roleDescription',
					type: 'rich-text',
					label: 'Role Description',
				},
				{
					type: 'object',
					label: 'Role Employees',
					name: 'employees',
					list: true,
					ui: {
						itemProps: (item: PageBlocksTeamGalleryRolesEmployees) => {
							return {
								label: item?.fullName,
							}
						},
						defaultItem: {
							image: '/people/JSgarro.jpg',
							fullName: 'Jamie Sgarro',
							pronouns: 'He,They',
							description: 'CO-FOUNDER & EXECUTIVE DIRECTOR',
						},
					},
					fields: [
						{
							type: 'image',
							name: 'image',
							label: 'Employee Image',
						},
						{
							type: 'string',
							name: 'fullName',
							label: 'Employee Name',
							required: true,
						},
						{
							type: 'string',
							name: 'pronouns',
							label: 'Employee Pronouns',
							description: 'Enter the pronouns separated by commas',
						},
						{
							type: 'string',
							name: 'description',
							label: 'Employee Description',
						},
						{
							type: 'object',
							label: 'Employee Socials/Links',
							name: 'socials',
							list: true,
							ui: {
								itemProps: (item: PageBlocksTeamGalleryRolesEmployeesSocials) => {
									return {
										label: item?.platform,
									}
								},
								defaultItem: {
									platform: 'Profile Page',
									link: '/',
									iconName: 'fa:id-card',
								},
							},
							fields: [
								{
									name: 'platform',
									label: 'Platform',
									type: 'string',
								},
								{
									name: 'link',
									label: 'Link',
									type: 'string',
									required: true,
								},
								{
									name: 'iconName',
									label: 'Icon',
									type: 'string',
									options: [
										{
											label: 'Profile Page',
											value: 'fa:id-card',
										},
										{
											label: 'LinkedIn',
											value: 'fa:linkedin-square',
										},
										{
											label: 'Twitter',
											value: 'fa:twitter',
										},
									],
								},
							],
						},
					],
				},
			],
		},
	],
}
