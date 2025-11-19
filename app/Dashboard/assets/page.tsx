'use client'
import React, { useState } from 'react'
import Dashboard from '../page'
import DashboardNav from '../../components/DashboardNav'
import UploadLogo from '@/app/components/UploadLogo'

export default function Assets() {
    const [logo,setLogo] = useState<Array>([])
  return (
    <div>
        <DashboardNav/>
        <div className="assets flex  flex-col ml-[15em]">
            <UploadLogo/>
        <div className='flex flex-col'>
             <p className='font-bold lg:ml-[3em] mt-[1.5em]'>Logos</p>   

             {
                logo.length > 0? 
                    ''
                : <p className='text-[#c5c5c5] text-center my-[2em]'>No logo uploaded yet</p>
             }
    
        </div>

        </div>
    </div>
  )
}
