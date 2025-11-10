'use client'

import Image from 'next/image'
import Link from 'next/link'
import React , {useRef} from 'react'
import { FcGoogle } from 'react-icons/fc'

function Login() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  return (
    <div className='mb-[2em]'>
        <Image src='/logo.png' className='mx-auto mt-[5em]' alt='logo' width='85' height='85'/>
        
        <div className='flex flex-col rounded-sm pt-[2em] border-[#ccc] 
        shadow-md w-[95%] lg:w-1/3 m-auto h-[30em] '>
            <p className='m-auto lg:ml-[8.5em] font-bold text-xl'>Sign in</p>
              <button  className='bg-white border inline-flex rounded-md p-[.75em]  text-black lg:w-[75%] w-[90%] pr-[4em] lg:ml-[4em] mt-[2em] mb-[1em] pl-[3em] ml-[1em]'>
                         <FcGoogle className='text-xl'/>

                         <p className='text-xs lg:text-base m-auto font-bold '>Continue with Google</p>
                      
                         </button>
          
           <p className='text-center text-[#b0aeae]'>OR</p>

        <div className="form">
            
    <div className="email_input ml-[1em] flex flex-col lg:ml-[4em] ">
          
           
           <input ref={emailRef} className="w-[90%] lg:w-[80%]  mt-[.5em] mb-[.5em] h-[3em] border p-4  font-normal  border-[#ccc] rounded-md bg-[#fafafa] text-[#18181b]"   type="text" name="email" placeholder='Email'/>
         </div>

    <div className="email_input ml-[1em] flex flex-col lg:ml-[4em] ">
          
           
      
           <input ref={passwordRef} className="w-[90%] lg:w-[80%]  mt-[.5em] mb-[.5em] h-[3em] border p-4  font-normal border-[#ccc] rounded-md bg-[#fafafa] text-[#18181b]"   type="text" name="username" placeholder='Password'/>
         </div>

             <button  className='bg-purple-500 inline-flex rounded-md p-[.75em]  text-white lg:w-[75%] w-[90%] pr-[4em] lg:ml-[4em] mt-[2em] mb-[1em] pl-[3em] ml-[1.5em]'>
                         
                         <p className='m-auto font-bold '>Continue with Email</p>
                      
                         </button>
            <div className="inline-flex mb-[2em] gap-[.25em] ml-[5em] lg:ml-[10em]">
                <p>Not a User?</p>
                <Link href='/Auth/Register' className='text-purple-500'>Signin</Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Login
