import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
       <div className="call_up_text lg:pl-[7em] flex flex-col lg:w-full  pt-[em] gap-[1em]">
               
            <p className='lg:text-5xl font-bold lg:leading-[1.5em] text-lg lg:px-[3em] lg:w-[17em] lg:pt-[1.5em] m-auto'>The Easiest Invoicing App on the Internet</p>
            <p className='lg:ml-[28%] ml-[1.5em] '>Create invoices for your sales and send them to your clients</p>
           <div className='flex gap-[3em] lg:m-auto ml-[7em] mt-[1em] lg:pt-[1em]'>
            <Link href='/Upload' className=' text-center bg-white-500 lg:w-[12em] border -ml-[4em] text-black p-[.6em] rounded-md'>Try it for free</Link> 
            <Link href='/Auth/Login' className='bg-black text-center lg:w-[12em] w-[8em] text-white p-[.6em] rounded-md'>Login</Link> 
            </div> 
        </div>
  )
}

export default Hero