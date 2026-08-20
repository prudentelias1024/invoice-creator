'use client'
import React, { useEffect, useState } from 'react'
import Dashboard from '../page'
import DashboardNav from '../../components/DashboardNav'
import UploadLogo from '@/app/components/UploadLogo'
import { useAuth } from '@/app/components/Context/AuthProvider'
import ImageSkeleton from '@/app/components/ImageSkeleton'
import  Image from "next/image";
import client from '@/lib/supabase/server'

export default function Assets() {
  const [loading, setLoading] = useState(true)
  const [newLogoUploaded, setNewLogoUploaded] = useState<Boolean>(false)
  const auth = useAuth()
  const user = auth?.user
  const [logo,setLogo] = useState<Array<{ asset_url: string }>>([])
  const getLogo = async() => {
     if (!user) {
       setLoading(false)
       return
     }
     const res = await client.from('assets').select().eq('user_id', user.id)
    console.log(res.data)
    setLogo([...res.data ? [...res.data] : []])
    setLoading(false)
  }
  useEffect(() => {
   getLogo()
   console.log(loading)
   },[loading, newLogoUploaded])

  return (
    <div>
      {
        user!== null?
        <DashboardNav fullNav={true} user={user?.user_metadata}/>: 

        ''    
      }
           
        <div className="assets flex  flex-col ml-[1em] pt-[3em] lg:ml-[15em]">
            <UploadLogo setLogo={setNewLogoUploaded}/>
        <div className='flex flex-col'>
             <p className='font-bold lg:ml-[3em] mt-[1.5em]'>Logos</p>   
            {
              logo.length == 0 && !loading   ?
               <p className=' text-[#c5c5c5] m-auto text-center my-[2em]'>No logo uploaded yet</p>
            :''
              }
            <div className='grid lg:grid-cols-4 grid-cols-3 justify-around lg:ml-[2.2em] pt-[1em] mb-[3em]'>
            {
              !loading && logo.length> 0? 
              logo.map((image,idx) => {
                return <img key={idx} src={image.asset_url} className='lg:w-[13em]  w-[8em] h-[6em] object-cover lg:h-[10em] border-gray-200 border rounded-md mx-auto mt-[2em]' alt='logo' ></img>
                
              }):
              ''
            }
            </div>
            {
                  loading && logo.length<1?
                <div className='lg:w-[90%] grid lg:grid-cols-4 lg:pl-[3em] grid-cols-3 flex-row gap-[1em] lg:gap-[2em]'>
                <ImageSkeleton/>
              <ImageSkeleton/>
              <ImageSkeleton/>
              <ImageSkeleton />
         </div>
            :''       
              
            }
          
            
    
        </div>

        </div>
    </div>
  )
}
