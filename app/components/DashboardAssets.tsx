'use client'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import { useAuth } from './Context/AuthProvider'
import client from '../api/Client'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

function DashboardAssets() {
  const user = useAuth()?.user
  const [assets, setAssets] = useState<Array<{ asset_url: string }>>([])
  
  const getLogo = async() => {
      if (!user) return

     const res = await client.from('assets').select().eq('user_id', user.id)

    setAssets([...(res.data ?? [])])
    
  }

  useEffect(() => {
   getLogo()
  },[user])
    
      
  return (

      <div className='flex flex-col gap-1'>

      <div className="inline-flex">

        <p className='font-bold text-lg  ml-[.5em] mt-[1em]'>Assets</p> 
       <Link href="/Dashboard/assets">
       <FaAngleRight className='ml-[.75em] mt-[1.55em]'/>  
       </Link> 
          </div>
            
            <div className='grid lg:grid-cols-4 grid-cols-3 justify-around lg:ml-[0.2em] pt-[1em] mb-[3em] gap-[1em] ml-[.5em]'>
         

             {
               assets.length > 0? 
               
               assets.map((image,idx) => {
                 return <img key={idx} src={image.asset_url} className='lg:w-[13em] w-[8em] h-[6em] object-cover lg:h-[10em]  border-gray-200 border  rounded-md mx-auto mt-[2em]' alt='logo' ></img>
                 
                })
                
                : ''
             }
             </div>
             {
              assets.length == 0? 
              <div className='inline-flex gap-2 justify-center my-[4em]  lg:mx-[15em]'>

                        <p className='text-[#c5c5c5] '>No asset uploaded yet</p>
                        <Link href='/Dashboard/assets' className='text-blue-500'>Upload an asset</Link>
                    </div>: ''
             }

             </div>
  )
}

export default DashboardAssets
