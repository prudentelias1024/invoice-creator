'use client'
import Link from 'next/link'
import React , {useEffect, useRef} from 'react'
import Image from 'next/image'
import { AiTwotoneFileText } from 'react-icons/ai'
import { MdElectricBolt, MdOutlineElectricBolt } from 'react-icons/md'
import { IoRocket } from 'react-icons/io5'
import  client from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { Toaster ,toast} from 'sonner'
function Register() {
    const router = useRouter()
    const fullnameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)


    const signUp = async() => {
      const fullname = fullnameRef.current!.value  
      const email = emailRef.current!.value  
      const password = passwordRef.current!.value
     
      const {data, error} = await client.auth.signUp({
         email, password, options: {
          data: {
            full_name: fullname
          }
         }
      })
      console.log(data);
      if(data.user !== null){
        toast.success('Signed you up successfully !!!!')
        setTimeout(() => {
          router.push('/Auth/Login')
        }, 3000);
      }
      if(error){
        toast.error('Cannot sign you up. Try again')
      }
    }

  
  return (
    <div className='flex lg:flex-row-reverse flex-col-reverse lg:gap-0 gap-[3em] mb-[3em] '>
    <Toaster />
        <div className=' pt-[5%] text-black flex flex-col gap-[2em]  pl-[2em] w-full lg:w-1/2 px-[3.5em]'>

      <p className='font-bold text-4xl lg:ml-[1.25em]'>Make your Invoice fast with Invora.</p>

      <div className='flex flex-col '>

          <AiTwotoneFileText className='text-4xl mt-2 text-gray-500' />
        <p className='text-xl px-[2em] -mt-[2em] lg:w-full ml-[.5em]  '>
           <b> Turn your spreadsheet or data into a professional invoice in seconds</b>. 
              Invoicely takes care of the formatting, numbering, and design—so you can focus on getting paid, not doing admin work.
        </p>
      </div>

       <div className='flex flex-col'>

          <MdOutlineElectricBolt className='text-4xl mt-2 text-black' />
        <p className='text-xl px-[2em]  -mt-[2em] ml-[.5em] '>
         <b>Import, map, and generate—just like that </b>. Upload your CSV or Excel file, choose a template, and let Invoicely instantly create polished PDF invoices for every client.
        </p>

        </div>


       <div className='flex flex-col'>
          <IoRocket className='text-4xl mt-2 text-black '/>
        <p className='text-xl px-[2em] -mt-[2em] ml-[.5em]'>
        <b>Send invoices faster and stay organized </b>. Track your billing history, customize templates, and manage all your invoices from one simple dashboard—no complex tools required.
        </p>
        </div>

        </div>
        <div className='form flex flex-col w-full lg:w-1/2'>
        
          <Image src='/sp.png' className='mx-auto mt-[5em]' alt='logo' width='150' height='120'/>
            <p className=' text-3xl font-black mt-[0em] mx-auto my-[1em]'>Join Invora</p>

            {/* images */}
        <div className="images mx-auto -mt-[1em] flex flex-row">
          <Image alt='image_1' src='/female1.png' width='50' height='50'  />
          <Image className='-ml-[.5em] border-2 border-white rounded-full' alt='image_2' src='/female2.png' width='50' height='50'  />
          <Image className='-ml-[.5em] border-2 border-white rounded-full' alt='image_3' src='/male1.png' width='50' height='50'  />
          <Image className='-ml-[.5em] border-2 border-white rounded-full' alt='image_4' src='/female1.png' width='50' height='50'  />
          <Image className='-ml-[.5em] border-2 border-white rounded-full' alt='image_5' src='/female2.png' width='50' height='50'  />
          <Image className='-ml-[.5em] border-2 border-white rounded-full' alt='image_6' src='/male1.png' width='50' height='50'  />
        </div>

        <div className='mx-auto mt-[.75em] inline-flex gap-1 '>
          <p>Join these and other </p> <p className='font-bold'>100+</p> <p> Users now </p>
          
          </div>
    <div className="email_input ml-[1em] mt-[1em] flex flex-col lg:ml-[4em] ">
          
      
           <input ref={fullnameRef} className="w-[90%] lg:w-[80%]  mt-[.5em]  h-[3em] border p-4  font-normal border-[#ccc] rounded-md bg-[#fafafa] text-[#18181b]"   type="text" name="username" placeholder='Fullname'/>
         </div>

    <div className="email_input ml-[1em] flex flex-col lg:ml-[4em] ">
          
           
           <input ref={emailRef} className="w-[90%] lg:w-[80%]  mt-[.5em] mb-[.5em] h-[3em] border p-4  font-normal  border-[#ccc] rounded-md bg-[#fafafa] text-[#18181b]"   type="text" name="email" placeholder='Email'/>
         </div>

    <div className="email_input ml-[1em] flex flex-col lg:ml-[4em] ">
          
           
      
           <input ref={passwordRef} className="w-[90%] lg:w-[80%]  mt-[.5em] mb-[.5em] h-[3em] border p-4  font-normal border-[#ccc] rounded-md bg-[#fafafa] text-[#18181b]"   type="password" name="username" placeholder='Password'/>
         </div>

             <button onClick={signUp}  className='bg-black inline-flex rounded-md p-[.75em]  text-white lg:w-[75%] w-[90%] pr-[4em] lg:ml-[4em] mt-[2em] mb-[1em] pl-[3em] ml-[1.5em]'>
                         
                         <p className='m-auto font-bold '>Join Invoicely</p>
                      
                         </button>

            <div className="inline-flex  gap-[.25em] mx-auto">
                <p>Already joined?</p>
                <Link href='/Auth/Login' className='text-blue-500'>Login</Link>
            </div>
            
        </div>
    </div>
  )
}

export default Register
