'use client'
import React, { useRef } from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import {FileInterface} from '../interfaces/FileInterface'
export default function UploadLogo() {
   const fileRef = useRef<Array<FileInterface>>()
   
   const uploadFile = (event:React.ChangeEvent<HTMLInputElement>) => {
      setUploadedFile(true)
      setFiles([...fileRef.current.files])

    }

    const clickUpload = () => {
   fileRef.current.click()
 }
 
  return (
   <div>
    <p className="font-bold mt-[2em]">Upload Logo</p>

        <div onClick={clickUpload} className="flex flex-col gap-[1em] border-3 border-gray-200 border-dashed  rounded-md p-[2em] mt-[2em] ml-[3em] border-spacing-x-[2em] w-[70%] text-center">
                    <AiOutlineCloudUpload className='text-5xl m-auto text-purple-700' />
                    <p className='font-bold'>Upload a logo for custom invoice</p>   
    
                    <input type="file" name="file" onChange={uploadFile} className='hidden' ref={fileRef} />
    
                    <p className='text-[#989797]'> PNG/JPG (Max 1MB)</p> 
            
                </div>
   </div> 
  )
}
