import React from 'react'

const Mission = () => {
    return (
        <main className='w-screen items-center justify-center flex flex-col min-h-screen'>
            <div className='flex flex-col gap-6 justify-center items-center p-4 md:w-4/5 w-5/6 text-pretty'>
                <h1 className='text-2xl sm:text-4xl font-bold'>This is the Mission page</h1>
                <p className='text-sm sm:text-xl w-full'>
                    The Next.js app directory looks for the page.tsx within a directory within the app directory to
                    render to the page.
                </p>
                <p className='text-sm sm:text-xl w-full'>
                    In this case, the <code>Misison</code> directory contains a <code>page.tsx</code> file, so the
                    page.tsx file is rendered when <code>http://localhost:3000/mission</code> is rendered.
                </p>
            </div>
        </main>
    )
}

export default Mission
