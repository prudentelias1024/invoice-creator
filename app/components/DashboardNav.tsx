
'use client'
import React, { useState } from 'react'
import { MdCancel, MdDashboard, MdLogout } from 'react-icons/md'
import { FaArrowLeft, FaArrowRight, FaCreativeCommons, FaCreativeCommonsBy, FaFileInvoice, FaHistory,  FaMoneyBill, FaMoneyBillWave, FaUser } from 'react-icons/fa'
import { RxHamburgerMenu } from "react-icons/rx";
// import { useSelector } from 'react-redux';
import { BsClockHistory } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image'  
interface User  {
    fullname: string,
    email: string,
    plan: string
}
export default function Navbar({user, fullNav}) {
  const [openSideNav, setOpenSideNav] = useState<Boolean>(false)

  
  const logout = () => {

  }
  const toggleNav = () => {
    setOpenSideNav(!openSideNav)
  }
  
  return (
    <>
     <div className='lg:hidden w-full  absolute bg-green-500 top-[1em] left-[1em] '>
      
    
{
  !openSideNav ?
  <RxHamburgerMenu onClick={toggleNav} className='text-2xl lg:hidden absolute top-[1em] left-[1.5em]'/>
:


      <div className=" text-white bg-green-500 z-50 h-screen fixed  top-[1em] w-[16em]
       -left-[1em] pl-[2em]  pr-[1.5em] py-[6.75em] flex flex-col gap-[2em] ">
        <MdCancel onClick={toggleNav} className='text-2xl absolute top-[1.5em] left-[80%]'/>
          <div className='inline-flex gap-[1em]'>

        

      <MdDashboard className='text-2xl '/>
            <Link href='/Dashboard'>Dashboard</Link>
      </div>
      
      <div className='inline-flex gap-[1em]'>
        <FaCreativeCommonsBy className='text-3xl'/>
            <Link href='/Dashboard/assets'>My assets</Link>
      </div>

    
      <div className='inline-flex gap-[1em]'> 
        <FaUser className='text-3xl'/>
            <Link href='/Dashboard/invoices/'>Invoices </Link>
        </div>


      <div className='inline-flex gap-[1em]'>
        <FaMoneyBill className='text-3xl'/>
            <Link href='/Dashboard/clients/'>Clients</Link>
        </div>
      
      

              

      <div className='inline-flex gap-[1em] cursor-pointer'>
        <MdLogout className='text-3xl'/>
            <p onClick={logout}>Logout</p>
    </div>

      </div>
      }
            </div>
    
    <div className={fullNav?
    ' bg-white fixed h-screen hidden w-[15em] -mt-[1.5em]  px-[1.5em]  lg:flex flex-col gap-[3em]  ':
       'bg-white fixed h-screen hidden  py-[1em] px-[.5em]  lg:flex flex-col gap-[3em] w-fit'}>
             
    
     <Image src='/sp.png' className='mt-[-1em] ml-[.5em] mb-[-4em] ' alt='logo' width='120' height='50'/>
           <Link  href='/Dashboard' className="w-full h-[3em] px-[1em] pt-[1em] pb-[1.5em]  inline-flex gap-[1em] lg:-mt-[5em]'>
">
     
      <MdDashboard className='text-2xl  '/>
       {fullNav? 
       <p className=''>
         Dashboard
        </p>
        :''
      }
         
           
     </Link>

       <Link href='/Dashboard/invoices' className="w-full h-[3em] px-[1em] pt-[1em] pb-[1.5em]  inline-flex gap-[1em] lg:mt-[4em]'>
">
     
      <FaFileInvoice className='text-2xl'/>
    {fullNav?
       <p className='mt-[.15em]'>
         Invoices
        </p>: ''
      }
        
           
     </Link>
      
      
  
           <Link href='/Dashboard/assets' className="w-full h-[3em] px-[1em] pt-[1em] pb-[1.5em]  inline-flex gap-[1em] lg:mt-[4em]'>
">
       <div className='inline-flex gap-[1em]'>
        <FaCreativeCommons className='text-2xl'/>
        {fullNav? 
       <p className='mt-0'>
         Your assets
        </p>: ''
      }
        </div>
      
      
        
           
     </Link>
      
  
         
           <Link href='/Dashboard/clients' className="w-full h-[3em] px-[1em] pt-[1em] pb-[2em]  inline-flex gap-[1em] lg:mt-[4em]'>
">
     
      <FaUser className='text-xl'/>
     {fullNav? 
       <p className='mt-0'>
         Clients
        </p>:""
      }
        
           
     </Link>
      
  
  

      <div className='inline-flex gap-[1em] ml-[1em] cursor-pointer'>
        <MdLogout  className='text-xl text-[#64748b]'/>
        {fullNav? 
            <p onClick={logout} className='text-[#64748b]'>Logout</p>:''
      }
    </div>
    <div className="profile flex flex-row gap-[1em]  -ml-[.5em]" >
      
       <div className={fullNav? 'rounded-full inline-flex bg-purple-600 w-fit h-fit p-[0.5em] font-bold  text-base text-white':
        ' ml-[1em] rounded-full inline-flex bg-purple-600 w-fit h-fit p-[0.5em] font-bold  text-base text-white'}>
{
  user !== undefined?
    <div>
          <p className="">{user.full_name.split(' ')[0][0]}{user.full_name.split(' ')[1][0]}</p>
          
          
    </div>
          : ' '
}
</div>
{
  fullNav
}
<div className='flex flex-col'>
  {
    fullNav?
    <p className='text-xs text-[rgba(100,116,139,1)]'>Welcome back</p> : ''
  }
{
  
  user !== undefined && fullNav?
  <p className="">{user.full_name.split(' ')[0]}</p>
  : ' '
  
}
  {/* <p className='bg-blue-500 font-bold rounded-md text-center text-xs    w-fit py-[.125em] px-[.5em] text-white'>Business</p> */}
  {
    fullNav?
    <p className='bg-purple-500 font-bold rounded-md text-center text-xs   mt-[.5em] w-fit py-[.125em] px-[.5em] text-white mb-[1em]'>Pro</p>:''
  }
  
  </div>
  {fullNav? 
   <FaArrowRight className='text-[rgba(100,116,139,1)] mt-[.75em] ml-[1em]'/>
  :''}
    </div>
   
    </div>
    </>
  )
}
