import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex flex-row justify-around lg:pl-[2em] lg:pt-[1em]">
        <div className="-ml-[5em] flex">
            <Image src='/sp.png' className='-mt-[4em]' alt='logo' width='180' height='180'/>
            {/* <p className='text-2xl font-black text-black mt-[.5em]'>Invoicer</p> */}
        </div>

        <div className='hidden lg:flex  gap-[3em]'>
            <Link href={"/"} >Features</Link>
            <Link href={"/"} >Pricing</Link>
            <Link href={"/"} >Resources</Link>
            <Link href={"/"}>About</Link>
        </div>
        <div className='hidden lg:flex -mt-[.25em] gap-[1.5em]'>
        <Link href='/Auth/Login' className=' mt-2 text-black'>Log in</Link> 
        <Link href='/Auth/Register' className='bg-black text-white p-[.6em] rounded-md h-[3em]'>Try it for free</Link> 
        </div>
    </div>
  )
}

export default Navbar