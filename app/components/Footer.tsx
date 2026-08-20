import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className=' flex text-white flex-col lg:flex-row py-[10em] bg-[#000] h-[20em]'>
          <div className='flex flex-col -mt-[7.5em]'>
            <Image src='/sp-black.png' className=' ml-[.5em] mb-[-4em] object-cover ' alt='logo' width='200' height='120'/>
            <p className='ml-[2em]'>Make Invoices for your Business</p>
            <p className='ml-[2em] text-sm mt-[2em]'>© Invora 2025–2026. All rights reserved</p>
            </div>
            
      
        <div className='flex lg:ml-[20em] mt-[2em] gap-[1em] ml-[1.5em]  lg:gap-[3em]'>
            <Link href={"/"} >Features</Link>
            <Link href={"/"} >Pricing</Link>
            <Link href={"/"} >Resources</Link>
            <Link href={"/"}>About</Link>
        </div>
    </div>
  )
}
