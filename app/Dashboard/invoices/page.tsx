'use client'
import React, {useState} from 'react'

import DashboardNav from '../../components/DashboardNav'
import UploadLogo from '@/app/components/UploadLogo'
export default function Invoices() {
      const [invoices,setInvoices] = useState<Array>([])
  return (
      <div>
            <DashboardNav/>
    
     
    
     <div className='flex ml-[15em] flex-col'>
        
             <p className='font-bold ml-[1.5em] mt-[1.5em]'>Invoices</p>   

             {
                invoices.length > 0? 
                    ''
                    : <p className='text-[#c5c5c5] text-center my-[2em]'>No Invoice made yet</p>
             }
    
        </div>
                    </div>
  
     
  )
}
