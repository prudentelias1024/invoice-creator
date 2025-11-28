'use client'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import { useAuth } from './Context/AuthProvider'
import client from '../api/Client'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

function DashboardAssets() {
  const {user,session} = useAuth()
  const [assets, setAssets] = useState<Array>([])
  
  const getLogo = async() => {
     const res = await client.from('assets').select().eq('user_id', user.id)
    console.log(res.data)
    setAssets([...res.data])
    
  }

  useEffect(() => {
   getLogo()
  },[])
    
      
  return (

      <div className='flex flex-col gap-1'>

      <div className="inline-flex">

        <p className='font-bold text-lg  ml-[.5em] mt-[1em]'>Assets</p> 
       <Link href="/Dashboard/assets">
       <FaAngleRight className='ml-[.75em] mt-[1.55em]'/>  
       </Link> 
          </div>

             {
                assets.length > 0? 
               
                assets.map((image,idx) => {
                return <img key={idx} src={image.asset_url} className='w-[13em] h-[10em] border-gray-200 border rounded-md mx-auto mt-[2em]' alt='logo' ></img>
                           
                })

                    : <div className='inline-flex gap-2 justify-center my-[4em]  lg:mx-[15em]'>

                        <p className='text-[#c5c5c5] '>No asset uploaded yet</p>
                        <Link href='/D' className='text-blue-500'>Upload an asset</Link>
                    </div>
             }
             </div>

  )
}

export default DashboardAssets
