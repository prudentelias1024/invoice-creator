'use client'
import React, {useRef, useState, CSSProperties} from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import client from '../api/Client'
import { useAuth } from './Context/AuthProvider'
import {BounceLoader} from 'react-spinners'


export default function EditClient({data, closeModal, edited}) {
  const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
   const {user,session} = useAuth()
    const [loading, setLoading] = useState(false)
    const fullnameRef = useRef() 
    const emailRef = useRef() 
    const phonenoRef = useRef() 
    const titleRef = useRef() 
    const addressRef = useRef() 
    const editClient = async() => {
      setLoading(true)
       const res = await client.from('clients').update(
        {
          client_name: fullnameRef.current.value,
          client_address: addressRef.current.value,
          client_phonenumber: phonenoRef.current.value,
          client_title : titleRef.current.value,
          client_email: emailRef.current.value,
          added_by: user.id

        }
      ).eq('id',data.id)
   
     
     if (res.status == 204) {
         setLoading(false)
         closeModal()
         edited(true)
     }
    }
  return (
    <div className='w-full'>
     

      <p className="font-extrabold mt-[2em] ml-[1em]">Edit Existing Client</p>
      <MdOutlineCancel onClick={closeModal} className='absolute left-[80%] top-[1em] mb-[1em] text-xl ml-[6em]'/>

<div className="grid grid-cols-2 gap-[1.5em] pt-[2em]">

<div className='flex flex-col  ml-[1em]'>

        <label htmlFor="fullname" className="text-sm  font-semibold">Full Name</label>
          <input ref={fullnameRef} defaultValue={data.client_name} className="w-[90%] lg:w-full  mt-[.5em]  h-[2em] border p-4  font-normal border-[#ccc] rounded-md text-[#18181b]"   type="text" name="fullname" placeholder='Type here'/>
        
</div>

<div className='flex flex-col  ml-[1em]'>

        <label htmlFor="email" className="text-sm  font-semibold">Email</label>
          <input ref={emailRef} defaultValue={data.client_email} className="w-[90%] lg:w-full  mt-[.5em]  h-[2em] border p-4  font-normal border-[#ccc] rounded-md text-[#18181b]"   type="text" name="email" placeholder='Type here'/>
        
</div>

<div className='flex flex-col  ml-[1em]'>

        <label htmlFor="email" className="text-sm  font-semibold">Title</label>
          <input ref={titleRef} defaultValue={data.client_title} className="w-[90%] lg:w-full  mt-[.5em]  h-[2em] border p-4  font-normal border-[#ccc] rounded-md text-[#18181b]"   type="text" name="title" placeholder='Type here'/>
        
</div>


<div className='flex flex-col  ml-[1em]'>

        <label htmlFor="email" className="text-sm  font-semibold">Phone Number</label>
          <input ref={phonenoRef} defaultValue={data.client_phonenumber} className="w-[90%] lg:w-full  mt-[.5em]  h-[2em] border p-4  font-normal border-[#ccc] rounded-md text-[#18181b]"   type="text" name="email" placeholder='Type here'/>
        
</div>


</div>  
<div className='flex flex-col mt-[2em] ml-[1em]'>

        <label htmlFor="email" className="text-sm  font-semibold">Address</label>
          <input ref={addressRef} defaultValue={data.client_address} className="w-[90%] lg:w-full  mt-[.5em]  h-[2em] border p-4  font-normal border-[#ccc] rounded-md text-[#18181b]"   type="text" name="address" placeholder='Type here'/>
        
</div>


<button onClick={editClient} className='bg-purple-500 justify-around flex text-white p-[.5em] rounded-md text-sm mt-[3em] w-[10em] ml-[80%] pr-[1em]'>
  
  <BounceLoader color={"#FFF"}
        loading={loading}
        cssOverride={override}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader">

        </BounceLoader>
  <p>  Edit Client  </p>
  </button>
</div>

  )
}
