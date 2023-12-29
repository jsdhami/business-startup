import React from 'react'
import Link from 'next/link'

function footer() {
  const currentDate = new Date().getFullYear();
  return (
    <>
    <div className="h-8 w-full bg-indigo-600 shadow-inherit">
    <div className='flex min-h-full max-h-full text-center items-center justify-around font-bold'>
      <div>© {currentDate} Company Name</div>
      <div>Developed by <Link href="https://www.jsdhami.com.np"><span className='text-white'>SudurTech</span></Link></div>
    </div>
    </div>
    </>
  )
}

export default footer