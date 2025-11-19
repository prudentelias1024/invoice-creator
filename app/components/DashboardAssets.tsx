'use client'
import Link from 'next/link'
import React, {useState} from 'react'

function DashboardAssets() {
    
        const [assets,setAssets] = useState<Array<string>>([])
  return (

      <div>

        <p className='font-bold text-lg  ml-[.5em] mt-[1em]'>Assets</p>   

             {
                assets.length > 0? 
                    ''
                    : <div className='inline-flex gap-2 justify-center my-[4em] lg:mx-[15em]'>

                        <p className='text-[#c5c5c5] '>No Client added yet</p>
                        <Link href='/D' className='text-blue-500'>Create a Client</Link>
                    </div>
             }
             </div>

  )
}

export default DashboardAssets
