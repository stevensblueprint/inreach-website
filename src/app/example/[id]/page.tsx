import React from 'react'
import data from '../../../../example.json'

const ExampleIDPage = ({ params }: { params: { id: string } }) => {
	const person = data.examples.filter((person) => person.id === params.id)

	return (
		<main className='w-screen items-center justify-center flex flex-col min-h-screen'>
			<div className='flex flex-col gap-6 justify-center items-center p-4 md:w-4/5 w-5/6 text-pretty'>
				<h1 className='text-2xl sm:text-4xl font-bold'>
					This is the example id page, which uses a dynamic route!
				</h1>
				<p className='text-sm sm:text-xl w-full'>
					The text below is displayed depending on the parameter id in the url.
				</p>
				<p className='text-sm sm:text-xl w-full'>
					You can test this by changing the 1 in <code>http://localhost:8000/example/1</code> to 1, 2, 3, or
					4.
				</p>
				{Number(params.id) >= 1 && Number(params.id) <= 4 ? (
					<>
						<p className='text-sm sm:text-xl w-full'>Name: {person[0].name}</p>
						<p className='text-sm sm:text-xl w-full'>Message: {person[0].message}</p>
					</>
				) : (
					<p className='text-sm sm:text-xl w-full text-red-500 font-semibold'>
						Your id number was not found.
					</p>
				)}
			</div>
		</main>
	)
}

export default ExampleIDPage
