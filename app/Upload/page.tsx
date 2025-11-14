'use client'
import React, { useState, useRef, Ref, RefObject } from 'react'
import Navbar from '../components/Navbar'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { PiMicrosoftExcelLogoFill } from 'react-icons/pi'
import NextNProgress from 'nextjs-progressbar';
import { MdDeleteOutline } from 'react-icons/md'
import ProgressBar from '@ramonak/react-progress-bar'
import * as XLSX from 'xlsx'
// import * as pdfmaker from ''
function Upload() {
 
 interface FileInterface  {
  lastModifiedTime: Number,
  name: String,
  size: Number,
  lastModifiedDate:Date,
  type: String
 }
  const [uploadInfo, setUploadInfo] = useState(null)
 const [files, setFiles] = useState<Array<FileInterface>>([])
 const [fileExt, setFileExt] = useState('')
 const [filename, setFileName] = useState('')
 const [filesize, setFileSize] = useState(0)
 const [headers, setHeaders] = useState<Array<string>>()
 const [keys, setKeys] = useState<Array<string>>([])
 const [docu, setDocu] = useState<Array<string>>()
 const fileRef:RefObject<any> = useRef(null)
 const clickUpload = () => {
   fileRef.current.click()
 }
 
 const uploadFile = (event:React.ChangeEvent<HTMLInputElement>) => {
  setFiles([...fileRef.current.files])
  const reader = new FileReader();
 
  reader.onload = function () {
    const base64 = (reader.result as string).split(",")[1]; 
    console.log(base64)

    const workbook = XLSX.read(base64, { type: "base64" });
    console.log(workbook)
    const doc = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]])
   
    console.log(doc)
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
          tempkeys.forEach((key) => {
            console.log(key)
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

      console.log(temp_wb)
      setDocu([...temp_wb])
       
      console.log(docu);
     
   

    // console.log(workbook.Sheets[workbook.SheetNames[0]]);
  };

  reader.onerror = function (err) {
    console.error("File error:", err);
  };

  reader.readAsDataURL(fileRef.current.files[0]); // convert → base64
 }
  return (
    <div className=''>
                <Navbar/>

        <div className="uploader rounded-md flex flex-col gap-[1.5em]self-center shadow-xs border border-gray-200 w-[70%] lg:mt-[2em] p-[2em] ml-[10em]">

            <div onClick={clickUpload} className="flex flex-col gap-[1em] border-3 border-gray-200 border-dashed  rounded-md p-[2em] border-spacing-x-[2em] text-center">
                <AiOutlineCloudUpload className='text-5xl m-auto text-purple-700' />
                <p className='font-bold'>Click or drag your excel file to upload</p>   

                <input type="file" name="file" onChange={uploadFile} className='hidden' ref={fileRef} />

                <p className='text-[#989797]'> XLSX / XLS (Max 5MB)</p> 
        
            </div>
        {
         files.length > 0 ? files.map((file,idx) => {
          return <div key={idx} className='rounded-md  border-2 mt-[2em]  flex flex-row gap-[1em]  border-gray-200 justify-between  '>
            <div className="flex gap-[1em] pl-[2em] py-[1em] " >
                <PiMicrosoftExcelLogoFill className='text-green-700 text-3xl' />
                <div className='flex flex-col'>
                    <p className="file_name font-bold ">{file.name}</p>
                  <div className='flex gap-[1em] mt-[.25em]'>
                    
                <ProgressBar completed={60} maxCompleted={100} bgColor='#2644ff' width='15em' customLabel=" " height='.5em'/>
                 <p className='text-xs -mt-1 font-bold'>100% completed</p>
                 <p className='text-xs -mt-1 font-bold'> 0.7MB of 2MB</p>
                  </div>
                </div>

            </div>
                <MdDeleteOutline className='text-2xl mr-[1.5em] mt-[.8em]' />
</div>
         }): ''
        }
            



        </div>
      
    </div>
  )
}

export default Upload
