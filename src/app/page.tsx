"use client"

import { Icon } from '@iconify-icon/react'
import Link from 'next/link'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-center p-12'>
      <h1 className='md:text-8xl text-4xl text-center font-bold text-inreach-alley-green mb-2'>InReach</h1>
      <div className='flex gap-3 justify-center items-center'>
        <Link href={"https://github.com/stevensblueprint/inreach-website"} target='_blank'><Icon icon="mdi:github" observe={false} className='hover:scale-110 transition-all text-4xl' /></Link>
        <Link href={"https://inreach.org/"} target='_blank'><Icon icon="mdi:home" observe={false} className='hover:scale-110 transition-all text-4xl' /></Link>
      </div>
		</main>
	)
}
