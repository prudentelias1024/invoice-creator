import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex flex-row justify-around lg:pl-[2em] lg:pt-[1em]">
        <div className="">
            <p className='text-2xl'>Logo</p>
        </div>

        <div className='hidden lg:flex  gap-[3em]'>
            <Link href={"/"} >Features</Link>
            <Link href={"/"} >Pricing</Link>
            <Link href={"/"} >Resources</Link>
            <Link href={"/"}>About</Link>
        </div>
        <div className='hidden lg:flex -mt-[.25em] gap-[1.5em]'>
        <Link href='/Auth/Register' className=' mt-2 text-purple-500'>Log in</Link> 
        <button className='bg-purple-500 text-white p-[.6em] rounded-md'>Try it for free</button> 
        </div>
    </div>
  )
}

export default Navbar