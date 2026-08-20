'use client'
import React, {useEffect, useState} from 'react'

import DashboardNav from '../../components/DashboardNav'
import UploadLogo from '@/app/components/UploadLogo'
import Link from 'next/link'
import Modal from 'react-modal'
import Upload from '@/app/components/Upload'
import { useAuth } from '@/app/components/Context/AuthProvider'
import { FaAngleRight } from 'react-icons/fa'
export default function Invoices() {
  const user = useAuth()?.user
   
 useEffect(() => {
    Modal.setAppElement('#invoices')
 },[])
      const [invoices,setInvoices] = useState<Array<any>>([])
      const [modalIsOpen, setModalIsOpen] = useState(false);
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    paddingRight: '12.5%',
    width: '70%',
    height: '65%',
    transform: 'translate(-50%, -50%)',
  },
};

  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal(){
    setModalIsOpen(false)
  }
  
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }
    return (
      <div id='invoices'>
        {
          user !== null?
            <DashboardNav fullNav={true} user={user?.user_metadata}/>
            : ''
        }
    
     
    
     <div className='flex ml-[15em] flex-col'>
        
           <div className="flex flex-row w-[97%] justify-between">


        <p className='font-bold text-lg  ml-[.5em] mt-[2em]'>Invoices</p>   
        <button onClick={openModal} className="bg-purple-500 h-[2.5em] w-fit mx-[3em] mt-[2em] rounded-md text-white px-[2em] mr-">Upload a Spreadsheet   </button>
        </div>
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div id="upload">

<Upload />
<div> 
        </div>
      </div>
      </Modal>
             {
               invoices.length > 0? 
               ''
               : <div className='inline-flex gap-2 justify-center my-[12em]'>

                        <p className='text-[#c5c5c5] '>No Invoice made yet</p>
                        <Link href='/Dashboard/invoices/Upload' className='text-blue-300'>Upload an invoice</Link>
                    </div>
             }
    
        {/* Show custom invoices here */}
         <div>
             <div className="inline-flex">

        <p className='font-bold text-lg  ml-[.5em] mt-[1em]'> Ready to use invoices</p> 
       <Link href="/Dashboard/assets">
       <FaAngleRight className='ml-[.75em] mt-[1.55em]'/>  
       </Link> 
          </div>
        </div>  
        </div>

       

                    </div>
  
     
  )
}
