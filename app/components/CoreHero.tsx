import React from 'react'
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { MdOutlineFileUpload } from 'react-icons/md';
import { RiFileExcel2Fill } from "react-icons/ri";
import { VscOpenPreview } from "react-icons/vsc";
import { RiDownloadFill } from "react-icons/ri";

export default function CoreHero() {
  return (
    <div className='lg;px-[5em] lg:py-[10em] py-[4em] px-[2em] w-full'>

      {/* <p className='text-xl text-gray-500 font-medium m-auto text-center mt-[1.25em] '>Spreadsheet → Invoice</p> */}
      <div className="flex flex-col lg:flex-row lg:mt-[5em]">

        <div className='lg:w-1/2 lg:pl-[4em]'>

      <p className='text-lg lg:text-3xl font-bold  leading-12  mt-[2em] '> Turn Business Excel Spreadsheets into clean & Professional Invoice</p>

      <p className='text-sm font-light text-gray-500 leading-12  '> You can turn your excel sheet from customers to an Invoice in 3 steps</p>
        </div>

      <div className='flex flex-row lg:p-[2em] mt-[3em] ml-[2em] lg:pl-[8em]
      '>
   <RiFileExcel2Fill className='lg:text-[10em] text-[7em] text-green-700'/>
   {/* <p className='text-9xl font-thin'>→</p> */}
    <FaFileInvoiceDollar className='lg:text-[10em] text-[7em] text-blue-700' />
      </div>
      </div>


    <div className="flex flex-col lg:flex-row gap-[2em] mt-[10em]">


  {/* upload */}
      <div className="border p-[2em] ml-[1.25em] lg:ml-0 border-[#adadad99] rounded-xl w-full lg:w-[25em]">
      <MdOutlineFileUpload className='text-4xl' />

      <p className='font-semibold text-xl my-[1em]'>Upload your spreadsheet</p>
      <p className='font-light text-[#2c2d3099] mt-[1.5em]'>Import your Excel or Google Sheets file in one click.Invora instantly reads your data—no setup, no formatting needed.</p>


      </div>


      <div className="border p-[2em] ml-[1.25em] lg:ml-0 border-[#adadad99] rounded-xl w-full lg:w-[25em]">
      <VscOpenPreview className='text-4xl' />

      <p className='font-semibold text-xl my-[1em]'>Preview & auto-layout</p>
      <p className='font-light text-[#2c2d3099] mt-[1.5em]'>We automatically structure your content into clean sections:
headers, tables, totals, and page breaks—ready for PDF.</p>


      </div>

      <div className="border p-[2em] ml-[1.25em] lg:ml-0 border-[#adadad99] rounded-xl w-full lg:w-[25em]">
      <RiDownloadFill
 className='text-4xl' />

      <p className='font-semibold text-xl my-[1em]'>Export your PDF</p>
      <p className='font-light text-[#2c2d3099] mt-[1.5em]'>Download a professional, print-ready Invoice you can share, send, or archive.</p>


      </div>
    </div>


    </div>
  )
}
