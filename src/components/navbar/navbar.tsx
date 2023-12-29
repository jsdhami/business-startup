import Link from 'next/link'
import { getServerSession } from "next-auth/next"
import { options } from '@/app/api/auth/[...nextauth]/options'

const navbar = async () => {
  const session = await getServerSession(options)
  return (
    <>
    <div className='min-w-full max-w-full bg-green-500 h-14'>
    <div className="flex justify-between items-center h-full px-5 mx-32">
          <div className="text-black font-bold text-2xl">
            <Link href="/">Company Name</Link>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-black font-bold text-opacity-60 mx-4">
              <Link href="/">Home</Link>
            </div>
            <div className="text-black font-bold text-opacity-60 mx-4">
              <Link href="/about">About</Link>
            </div>
            <div className="text-black font-bold text-opacity-60 mx-4">
              <Link href="https://blog.jsdhami.com.np">Blog</Link>
            </div>
            <div className="text-black font-bold text-opacity-60 mx-4">
              <Link href="/projects">Projects</Link>
            </div>
            <div className="text-black font-bold text-opacity-60 mx-4">
              <Link href="/contact">Contact</Link>
            </div>

            {/* {!session ? (
              <div className="text-black font-bold text-opacity-60 mx-4">
                <Link href="/api/auth/signin">Log In</Link>
              </div>
            ) : (
              <div className="text-black font-bold text-opacity-60 mx-4">
                <Link href="/api/auth/signout">Log Out</Link>
              </div>
            )} */}

          </div>

         
         { !session ? 
         (
          <button className="bg-indigo-600 hover:bg-slate-500 text-white font-bold py-1 px-4 rounded-full shadow-sm">
         <Link href="/api/auth/signin">Log In</Link>
         </button>
         ) : (
          <button className="bg-indigo-600 hover:bg-slate-500 text-white font-bold py-1 px-4 rounded-full shadow-sm">
          <Link href="/api/auth/signout">Log Out</Link>
          </button>
         )
         
        }
        </div>

    </div>

    </>
  )
}

export default navbar