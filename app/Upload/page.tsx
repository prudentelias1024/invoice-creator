'use client'
import React, { useState, useRef, useEffect, RefObject } from 'react'
import Navbar from '../components/Navbar'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { PiMicrosoftExcelLogoFill } from 'react-icons/pi'
import NextNProgress from 'nextjs-progressbar';
import { MdDeleteOutline } from 'react-icons/md'
import ProgressBar from '@ramonak/react-progress-bar'
import * as XLSX from 'xlsx'
import { jsPDF } from "jspdf";
import Image from 'next/image'
import autoTable from "jspdf-autotable";

const Upload = () =>  {
 
 
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
 
 const uploadFile = (event:React.ChangeEvent<HTMLInputElement>) => {
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
    // console.log(workbook.Sheets[workbook.SheetNames[0]]);

  reader.onerror = function (err) {
    console.error("File error:", err);
  };

  reader.readAsDataURL(fileRef.current.files[0]); // convert → base64
 }


const previewPDF = () => {
const doc = makePDF()
const pdfBlob = doc.output("blob");
const url = URL.createObjectURL(pdfBlob);
setPreview(true)
setPreviewData(url)
}

const downloadPDF = () => {
   const doc = makePDF()
   doc.save("invoice.pdf")
}
const makePDF = () => {

console.log(docu)
// Default export is a4 paper, portrait, using millimeters for units
const doc = new jsPDF();
 // --- HEADER ---
  doc.setFontSize(30);
  const pagewidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;
  doc.text("Invoice", 13, 15);
 
  //from


  doc.setFontSize(10);
  doc.text("Billed to:", 14, 28);
  doc.text("lorem ipsum LTD:", 14, 34);
  doc.text("34, Campbell Street,Lagos State", 14, 40);
 
  doc.setFontSize(10);
  doc.text("Billed From:",  140, 28);
  doc.text("lorem ipsum LTD:", 140, 34);
  doc.text("34, Campbell Street,Lagos State",  140, 40);
 

  

  // --- TABLE DATA ---


   

  // --- AUTOTABLE ---
  autoTable(doc, {
    head: [headers],
    body: docu,
    startY: 45,
    styles: {
      fontSize: 10,
      halign: "left",
    },
    headStyles: {

      fillColor: [81,43,212], // Purple header
      textColor: 255,
    },
  });

  // --- FOOTER ---
  
  doc.setFontSize(10);
  doc.text("Date : "+ new Date().toLocaleDateString() , 14, pageHeight - 15);

  doc.text("Powered by Invoicely", 14, pageHeight - 10);

  // --- SAVE PDF ---
 return doc
}



 useEffect(() => {
}, [docu])


  return (
    <div className='w-full'>
                <Navbar/>

        <div className="uploader ml-[.5em] p-[1em] lg:mb-[4em] rounded-md flex flex-col gap-[1.5em]  shadow-xs border border-gray-200 lg:w-[70%] w-full lg:mt-[2em] lg:p-[2em] lg:ml-[10em]">

            <div onClick={clickUpload} className="flex flex-col gap-[1em] border-3 border-gray-200 border-dashed  rounded-md p-[2em] border-spacing-x-[2em] text-center">
                <AiOutlineCloudUpload className='text-5xl m-auto text-purple-700' />
                <p className='font-bold'>Click or drag your excel file to upload</p>   

                <input type="file" name="file" onChange={uploadFile} className='hidden' ref={fileRef} />

                <p className='text-[#989797]'> XLSX / XLS (Max 5MB)</p> 
        
            </div>
        {
         files.length > 0 ? files.map((file,idx) => {
          return <div key={idx} className='rounded-md  border-2 mt-[2em]  flex flex-row gap-[1em]  border-gray-200 justify-between  '>
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

   <button onClick={previewPDF}  className=' text-white w-[7em]wq lg:w-[10em] p-[.5em] rounded-md h-fit mt-[1em] bg-yellow-500  '>Preview </button> 
   <button onClick={downloadPDF}  className='  text-white w-[7em] lg:w-[10em] p-[.5em] rounded-md mt-[1em] bg-purple-500  '>Download </button> 
            </div>
: ''
}
    {preview && (
      <iframe
       style={{ width: "100%", height: "100vh", border: "none" }}
      className='h- mt-[6em]'
        src={previewData} />

    )}
        </div>

    </div>
  )
}

export default Upload
