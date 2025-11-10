import React from 'react'
import Navbar from './components/Navbar'
import Link from 'next/link'

function PageNotFound() {
  return (
    <div>
      <Navbar/>
      <div className="404 flex flex-col">
        <p className='text-[12em] m-auto text-black font-black'>404</p>
        <p className='text-xl m-auto text-[#939393] '>This page Cannot Found</p>
        <Link href='/' className='text-lg text-blue-500 m-auto mt-[1em]'>Go back</Link>
        
      </div>
    </div>
  )
}

export default PageNotFound
