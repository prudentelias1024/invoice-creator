'use client'
import React, { useRef, useState } from 'react'
import { AiFillWarning, AiOutlineCloudUpload } from 'react-icons/ai'
import {FileInterface} from '../interfaces/FileInterface'
import client from '../api/Client'
import {Toaster, toast} from 'sonner'
import { useAuth } from './Context/AuthProvider'
export default function UploadLogo(setLogo) {
   
   const {user, session} = useAuth()
   const fileRef = useRef<Array<FileInterface>>()
   const [filesizeError, setFileSizeError] = useState<String>('')
     const clickUpload = () => {
   fileRef.current.click()
 }
   
   const uploadFile = async(event:React.ChangeEvent<HTMLInputElement>) => {
      const  file = fileRef.current.files[0]
      const file_size = (parseInt(file.size / 1024))
      if (file_size > 50) {
        setFileSizeError("Cannot upload file up to 50KB in assets")
        toast.error("Cannot upload file up to 50KB in assets")
      } else {
      setFileSizeError("")
        
      const {data,error} = await client.storage.from('logo').upload(`${user.id}/ ${Date.now()}-${file.name}`, file)
      
      if (error) {
         toast.error('Cannot upload image')
      } 
      
        if(data){

        const { err } = await client.from("assets").insert({
          user_id:user.id,
          asset_url: `${"https://uutgahcujgkdyqnhmkww.supabase.co/storage/v1/object/public/logo/"+data.path}`
        })
        
        if (err) {
          toast.error(err)
        } else {
          toast.success('Logo uploaded successfully')
          setLogo.setLogo(true)
          
        }
      }

    }
  }
  

 
  return (
   <div>
    <p className="font-bold mt-[2em] lg:ml-[3em]">Upload Logo</p>
      <Toaster/>
        {
          filesizeError !== ''?
        <div className='text-red-500 ml-[3em] inline-flex gap-1 relative top-[1.5em]'>
          <AiFillWarning/>
          <p className=" text-xs font-semibold">{filesizeError}</p>
        </div>:''
        }

        <div onClick={clickUpload} className="flex flex-col gap-[1em] border-3 border-gray-200 border-dashed  rounded-md p-[2em] mt-[2em] ml-[3em] border-spacing-x-[2em] w-[70%] text-center">
                    <AiOutlineCloudUpload className='text-5xl m-auto text-purple-700' />
                    <p className='font-bold'>Upload a logo for custom invoice</p>   
    
                    <input type="file" accept='image/*' name="file" onChange={uploadFile} className='hidden' ref={fileRef} />
    
                    <p className='text-[#989797]'> PNG/JPG (Max 20KB)</p> 
            
                </div>
   </div> 
  )
}
