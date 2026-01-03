'use client'
import React, { useState, useRef, useEffect, RefObject } from 'react'
import Navbar from '../../../components/Navbar'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { PiMicrosoftExcelLogoFill } from 'react-icons/pi'
import { MdDeleteOutline } from 'react-icons/md'
import ProgressBar from '@ramonak/react-progress-bar'
import * as XLSX from 'xlsx'
import Image from 'next/image'
import { basicInvoice } from "../../../Invoices/Basic";
import { finerInvoice } from "../../../Invoices/Finer";
import { useAuth } from '../../../components/Context/AuthProvider'
import DashboardNav from '../../../components/DashboardNav'
import "../../../flag-icons.css";
import Select from "react-select";
import PDFPreviewer from '@/app/components/PDFPreviewer'
import { useSelector } from 'react-redux'

const Upload = () =>  {
  const {user, session} = useAuth() 
 
 const {profileToInvoice} = useSelector(state=>state)
 const [uploadInfo, setUploadInfo] = useState(null)
 const [files, setFiles] = useState<Array<FileInterface>>([])
 const [fileExt, setFileExt] = useState('')
 const [filename, setFileName] = useState('')
 const [filesize, setFileSize] = useState(0)
 const [headers, setHeaders] = useState<Array<string>>()
 const [keys, setKeys] = useState<Array<string>>([])
 const [docu, setDocu] = useState<Array<Object>>([])
 const fileRef:RefObject<any> = useRef(null)
 const [preview, setPreview] = useState<boolean>(false)
 const [previewData, setPreviewData] = useState<any>(null)
 const [uploadedFile, setUploadedFile] = useState<boolean>(false)
 const clickUpload = () => {
   fileRef.current.click()
 }

 const  imageUrlToBase64 = async(url) => {
  const res = await fetch(url);
  const blob = await res.blob();

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result); // returns full base64 string
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
 
 const uploadFile = async(event:React.ChangeEvent<HTMLInputElement>) => {
  setUploadedFile(true)
  setFiles([...fileRef.current.files])
  const reader = new FileReader();
 
  reader.onload = function () {
    const base64 = (reader.result as string).split(",")[1]; 
    // console.log(base64)

    const workbook = XLSX.read(base64, { type: "base64" });
    // console.log(workbook)
    const doc = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]])
    
    // console.log(doc)
    let tempkeys = []
    let tempHeaders = []
    
    
    console.log(Object.entries(doc[0]).forEach((entry) =>{
        tempkeys.push(entry[0])
        tempHeaders.push(entry[1])
      }));
      
      
      //keys are used to extract the rows from the wb
      setKeys(tempkeys)
      
      //headers is the first row
      setHeaders(tempHeaders)
      
      //turn workbook into array
      let temp = []
      const temp_wb = []
      // console.log(doc)
      doc.forEach((row,idx) => {
        
        if(idx > 0 ){
          tempkeys.forEach((key,idx) => {
            // console.log(key)
            if(row[key] == undefined){
              temp.push('')
            } else{     
              temp.push(row[key])
            }
          })
          
          temp_wb.push(temp)
          temp = []  
        }
      })
      
      setDocu(temp_wb)
      
      
      
    };
    
    reader.onerror = function (err) {
      console.error("File error:", err);
    };
    
    reader.readAsDataURL(fileRef.current.files[0]); // convert → base64
    // await previewPDF()
    
    
  }
  
  useEffect(() => {
   if (uploadedFile) {
     
     previewPDF()
   }
  }, [docu,user, previewData])

const previewPDF = async() => {
  const doc = await makePDF()
  const pdfBlob = await doc.output("blob").arrayBuffer()
  setPreview(true)
  setPreviewData(pdfBlob)
}

const downloadPDF = async() => {
   const doc = await makePDF()
   console.log(doc)
   doc.save("invoice.pdf")
}

const makePDF = async() => {
return finerInvoice(headers,docu)
}





  return (
    <div className='w-full flex flex-row '>
      {
        user!== null?
        <DashboardNav user={user.user_metadata} fullNav={false} />:''
      }

        <div className="uploader ml-[.5em] p-[1em] lg:mb-[4em] rounded-md flex flex-col gap-[1.5em]  shadow-xs  border-gray-200 lg:w-[30%] w-full lg:mt-[2em] lg:p-[1em] lg:ml-[8em]">
{/* { files.length> 0?'': */}
      <p className='font-bold text-xl'>Create a new invoice</p>
      <p className='font-light text-sm -mt-[1.4em]'>Fill details for invoice</p>

            <div onClick={clickUpload} className="flex flex-col gap-[1em] border-3 border-gray-200 border-dashed  rounded-md p-[2em] border-spacing-x-[2em] text-center">
                <AiOutlineCloudUpload className='text-5xl m-auto text-purple-700' />
                <p className='font-bold'>Click or drag your excel file to upload</p>   

                <input type="file" name="file"  accept=".xlsx,.xls" onChange={uploadFile} className='hidden' ref={fileRef} />

                <p className='text-[#989797]'> XLSX / XLS (Max 5MB)</p> 
        
            </div>



 {/* : ''} */}
        {
         files.length > 0 ? files.map((file,idx) => {
          return <div key={idx} className='rounded-md  border-2 mt-[2em]  flex flex-row gap-[1em]  border-gray-200 justify-between '>
            <div className="flex gap-[1em] pl-[1em] lg:pl-[2em] py-[1em] " >
                <PiMicrosoftExcelLogoFill className='text-green-700 text-4xl kg:text-3xl' />
                <div className='flex flex-col'>
                    <p className="file_name font-bold mt-[.75em] text-xs lg:text-base">{file.name}</p>
                  <div className='flex gap-[1em] mt-[.25em]'>
                    
                {/* <ProgressBar completed={60} maxCompleted={100} bgColor='#2644ff' width='15em' customLabel=" " height='.5em'/> */}
                 {/* <p className='text-xs -mt-1 font-bold'>100% completed</p> */}
                 {/* <p className='text-xs -mt-1 font-bold'> 0.7MB of 2MB</p> */}
                  </div>
                </div>

            </div>
                <MdDeleteOutline className='text-2xl mr-[1.5em] mt-[.8em]' />
</div>
         }): ''
        }
{
          uploadedFile?
          <div className='flex w-full justify-between'>

   {/* <button onClick={previewPDF}  className=' text-white w-[7em] lg:w-[6em] p-[.5em] rounded-md h-fit mt-[1em] bg-yellow-500  '>Preview </button> 
   <button onClick={downloadPDF}  className='  text-white w-[7em] lg:w-[6em] p-[.5em] rounded-md mt-[1em] bg-purple-500  '>Download </button>  */}
            </div>
: ''
}
    {/* {preview && (
      <iframe
       style={{ width: "100%", height: "100vh", border: "none" }}
      className='h- mt-[6em]'
        src={previewData} />

    )} */}
    <div className="other_info ">
       <div className="billing_info flex flex-col gap-[1em] mb-[2em]">
          <p className='font-bold text-xl'>Client Information</p>
           {
           
           profileToInvoice !== null?
            <div className="client">
              <div className="flex flex-row gap-[1em] mb-[2em]">
        {/* <Image src="/male1.png" alt='profile' width={50} height={50} className='rounded-full'></Image> */}

        <div className= 'rounded-full inline-flex bg-purple-600 w-[2.5em] h-[2.5em] pl-[.45em] p-[.5em] font-bold  text-base text-white'
       >
          <p className='mt'>
           {profileToInvoice.client_name.split(' ')[0][0] + profileToInvoice.client_name.split(' ')[1][0]}
            </p>
        </div>
        <div className="flex flex-col">
            <p className='font-bold'>{profileToInvoice.client_name}</p>
            <p className='text-gray-500'>{profileToInvoice.client_email}</p>
            <p className='text-gray-500'>{profileToInvoice.client_address}</p>
        </div>
            </div>
            </div>
           
           :
          <p className='text-gray-500'>No Client information. Choose or create a client</p> 
          

           }
          </div>

       <div className="billing_info flex flex-col gap-[1em] mb-[2em]">
          <p className='font-bold text-xl'>Currency Information</p>
          <select id="currency" className=" border border-gray-200 rounded-sm outline  p-[1em] h-[3.25em]">
              <option value="USD">
                🇺🇸 USD — $</option>
              <option value="EUR">🇪🇺 EUR — €</option>
              <option value="GBP">🇬🇧 GBP — £</option>
              <option value="JPY">🇯🇵 JPY — ¥</option>
              <option value="CNY">🇨🇳 CNY — ¥</option>
              <option value="INR">🇮🇳 INR — ₹</option>
              <option value="NGN">🇮🇳 INR — ₹</option>
              
          </select>
          </div>


{/* 
      <div className="billing_info flex flex-col gap-[1em]">
          <p className='font-bold text-xl'>Billing Information</p>
          
           <input  className="w-full  mt-[.5em]  h-[3em] border p-4  font-normal border-[#ccc] rounded-md bg-[#fafafa] text-[#18181b]"   type="text" name="billing_addr" placeholder='Company Name'/>

           <input  className="w-full  mt-[.5em]  h-[3em] border p-4  font-normal border-[#ccc] rounded-md bg-[#fafafa] text-[#18181b]"   type="text" name="billing_addr" placeholder='Billing Address'/>
      </div> */}
  
   </div>
        </div>

        <div className="preview flex flex-col pt-[2.5em] w-[50%] ">
          <div className="flex flex-row gap-[1em] mx-auto  ">
            <p className="preview">Preview</p>
            <p className="preview">PDF</p>
            <p className="preview">Preview</p>
            <p className="preview">Download</p>
          </div>

{
  previewData !== null?
  <PDFPreviewer fileData={previewData}></PDFPreviewer>: ''
}
        </div>

    </div>
  )
}

export default Upload
