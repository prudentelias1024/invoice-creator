'use client'
import React, {useState} from 'react'

import DashboardNav from '../../components/DashboardNav'
import UploadLogo from '@/app/components/UploadLogo'
import Link from 'next/link'
export default function Invoices() {
      const [invoices,setInvoices] = useState<Array<any>>([])
  return (
      <div>
            <DashboardNav/>
    
     
    
     <div className='flex ml-[15em] flex-col'>
        
             <p className='font-bold ml-[1.5em] mt-[1.5em]'>Invoices</p>   

             {
                invoices.length > 0? 
                    ''
                    : <div className='inline-flex gap-2 justify-center my-[12em]'>

                        <p className='text-[#c5c5c5] '>No Invoice made yet</p>
                        <Link href='/Upload' className='text-blue-300'>Upload an invoice</Link>
                    </div>
             }
    
        </div>
                    </div>
  
     
  )
}
