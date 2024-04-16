import Link from "next/link"

const NotFound = () => {
  return (
    <div className='flex min-h-screen items-center justify-center flex-col gap-2 text-center'>
      <h1 className="md:text-4xl text-2xl font-bold">Page Not Found</h1>
      <p className="md:text-xl text-lg">Could not find the requested page.</p>
      <Link href={"/"}>Return to <span className="font-semibold text-blue-500">Home</span></Link>
    </div>
  )
}

export default NotFound