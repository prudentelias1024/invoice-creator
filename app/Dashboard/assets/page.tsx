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
  const {user,session} = useAuth()
  const [logo,setLogo] = useState<Array>([])
  const getLogo = async() => {
     const res = await client.from('assets').select().eq('user_id', user.id)
    console.log(res.data)
    setLogo([...res.data])
    setLoading(false)
  }
  useEffect(() => {
   getLogo()
  },[loading, newLogoUploaded])

  return (
    <div>
      {
        user!== null?
        <DashboardNav user={user.user_metadata}/>: 

        ''
      }
           
        <div className="assets flex  flex-col ml-[15em]">
            <UploadLogo setLogo={setNewLogoUploaded}/>
        <div className='flex flex-col'>
             <p className='font-bold lg:ml-[3em] mt-[1.5em]'>Logos</p>   
            <div className='grid grid-cols-4 justify-around ml-[2.2em] pt-[1em]'>
            {
               logo.length > 0 ?
               !loading? 
                logo.map((image,idx) => {
                return <img key={idx} src={image.asset_url} className='w-[13em] h-[10em] border-gray-200 border rounded-md mx-auto mt-[2em]' alt='logo' ></img>
                           
                })

                : <>
                <ImageSkeleton/>
              <ImageSkeleton/>
              <ImageSkeleton/>
              <ImageSkeleton/>
                </>
              
               : <p className=' text-[#c5c5c5] m-auto text-center my-[2em]'>No logo uploaded yet</p>
              }
              </div>
    
        </div>

        </div>
    </div>
  )
}
