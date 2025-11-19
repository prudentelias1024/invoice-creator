
'use client'
import React, { useState } from 'react'
import { MdCancel, MdDashboard, MdLogout } from 'react-icons/md'
import { FaArrowLeft, FaArrowRight, FaCreativeCommons, FaCreativeCommonsBy, FaFileInvoice, FaHistory,  FaMoneyBill, FaMoneyBillWave, FaUser } from 'react-icons/fa'
import { RxHamburgerMenu } from "react-icons/rx";
// import { useSelector } from 'react-redux';
import { BsClockHistory } from 'react-icons/bs';
import Link from 'next/link';

interface User  {
    fullname: string,
    email: string,
    plan: string
}
export default function Navbar() {
  const [openSideNav, setOpenSideNav] = useState<Boolean>(false)
  const [currentUser, setCurrentUser] = useState<User>({   fullname: 'Prudent Elias',
    email: '',
    plan: ''})
  
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
            <Link href='/dashboard/home'>Dashboard</Link>
      </div>
      
      <div className='inline-flex gap-[1em]'>
        <FaCreativeCommonsBy className='text-3xl'/>
            <Link href='/dashboard/Pay'>My logo</Link>
      </div>

    
      <div className='inline-flex gap-[1em]'>
        <FaMoneyBill className='text-3xl'/>
            <Link href='/dashboard/Payments/'>Transaction History</Link>
        </div>
      
      
      <div className='inline-flex gap-[1em]'>
        <FaUser className='text-3xl'/>
            <Link href='/dashboard/Profile/'>Profile </Link>
        </div>

              

      <div className='inline-flex gap-[1em] cursor-pointer'>
        <MdLogout className='text-3xl'/>
            <p onClick={logout}>Logout</p>
    </div>

      </div>
      }
            </div>
    
    <div className=' bg-white fixed h-screen hidden w-[15em]  py-[1Em] px-[1.5em]  lg:flex flex-col gap-[3em]  '>
      
           <Link  href='/Dashboard' className="w-full h-[3em] px-[1em] pt-[1em] pb-[1.5em]  inline-flex gap-[1em] lg:mt-[4em]'>
">
     
      <MdDashboard className='text-2xl  '/>
       <p className='mt-[.15em]'>
         Dashboard
        </p>
         
           
     </Link>

       <Link href='/Dashboard/invoices' className="w-full h-[3em] px-[1em] pt-[1em] pb-[1.5em]  inline-flex gap-[1em] lg:mt-[4em]'>
">
     
      <FaFileInvoice className='text-2xl'/>
      <p className='mt-[.15em]'>
        Invoices
        </p>
        
           
     </Link>
      
      
  
           <Link href='/Dashboard/assets' className="w-full h-[3em] px-[1em] pt-[1em] pb-[1.5em]  inline-flex gap-[1em] lg:mt-[4em]'>
">
       <div className='inline-flex gap-[1em]'>
        <FaCreativeCommons className='text-2xl'/>
            <p >Your Assets</p>
        </div>
      
      
        
           
     </Link>
      
  
         
           <Link href='/dashboard/profile' className="w-full h-[3em] px-[1em] pt-[1em] pb-[2em]  inline-flex gap-[1em] lg:mt-[4em]'>
">
     
      <FaUser className='text-xl'/>
      Profile
        
           
     </Link>
      
  
  

      <div className='inline-flex gap-[1em] ml-[1em] cursor-pointer'>
        <MdLogout  className='text-xl text-[#64748b]'/>
            <p onClick={logout} className='text-[#64748b]'>Logout</p>
    </div>
    <div className="profile flex flex-row gap-[1em]  -ml-[.5em]" >
      
       <div className='rounded-full inline-flex bg-purple-600 w-fit h-fit p-[0.5em] font-bold  text-base text-white'>
{
  currentUser !== null?
    <div>
          <p className="">{currentUser.fullname.split(' ')[0][0]}{currentUser.fullname.split(' ')[1][0]}</p>
          
          
    </div>
          : ' '
}
</div>

<div className='flex flex-col'>
 <p className='text-xs text-[rgba(100,116,139,1)]'>Welcome back</p>
{
  
  currentUser !== null?
  <p className="">{currentUser.fullname.split(' ')[0]}</p>
  : ' '
  
}
  </div>
   <FaArrowRight className='text-[rgba(100,116,139,1)] mt-[.75em] ml-[1em]'/>
    </div>
   
    </div>
    </>
  )
}
