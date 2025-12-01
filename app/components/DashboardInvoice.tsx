'use client'
import Link from 'next/link'
import React, { useState } from 'react'

function DashboardInvoice() {
    const [invoices,setInvoices] = useState<Array<string>>([])
  return (
    <div>
         <p className='font-bold text-lg  ml-[.5em] mt-[3em]'>Invoices</p>   
        

             {
                invoices.length > 0? 
                    ''
                    : <div className='inline-flex gap-2 justify-center  my-[4em] lg:mx-[15em]'>

                        <p className='text-[#c5c5c5] ml-[1em] lg:ml-0'>No Invoice made yet</p>
                        <Link href='/Upload' className='text-blue-500'>Upload an invoice</Link>
                    </div>
             }
             </div>
  )
}

export default DashboardInvoice
