
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
       <div className="call_up_text lg:pl-[7em] flex flex-col lg:w-full  pt-[1.5em] gap-[1em]">
            <p className='lg:text-5xl font-bold lg:leading-[1.5em]  lg:px-[3em] lg:w-[17em] lg:pt-[1.5em] m-auto'>The Easiest Invoicing App on the Internet</p>
            <p className='ml-[28%] '>Create invoices for your sales and send them to your clients</p>
           <div className='flex gap-[3em] m-auto lg:pt-[1em]'>
            <Link href='/Upload' className=' text-center bg-white-500 lg:w-[12em] border -ml-[4em] text-black p-[.6em] rounded-md'>Try it for free</Link> 
            <Link href='/Auth/Login' className='bg-purple-500 text-center lg:w-[12em]  text-white p-[.6em] rounded-md'>Login</Link> 
            </div> 
        </div>
  )
}

export default Hero