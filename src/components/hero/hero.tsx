import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const hero = () => {
  return (
   <>
   <main className=" w-full min-h-screen flex-col p-24">
        <div className="z-10 max-w-7xl w-full items-center justify-around text-sm lg:flex">
          <div className='col-start-6'>
            <h1 className='text-5xl font-bold text-gray-800 mb-3'>Hii </h1>
            <h1 className="text-4xl font-bold text-gray-800 mb-3">I am <span className="text-blue-600">Janak Singh Dhami</span></h1>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Full Stack Developer and UX/UI Designer</h2>
            <p className="text-gray-700 mb-2 text-lg font-medium">I am a software engineer based in Tokyo, Japan specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.</p>
            <button className='bg-indigo-600 px-3 py-2 rounded-full mt-2 shadow-sm font-bold '><Link href="/about" className="text-white">
              Learn More
            </Link></button>
          </div>
          <div className='col-start-6'>
            <Image
              src="/about.png"
              alt="Description of the image"
              width={800}
              height={800}
            />
          </div>
        </div>
      </main>
   </>
  )
}

export default hero