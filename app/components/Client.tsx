
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { AiFillDelete, AiFillEdit, AiOutlinePlus } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { FaAngleRight } from 'react-icons/fa';
import { SlOptionsVertical } from "react-icons/sl";
import client from '../api/Client';
import { useAuth } from './Context/AuthProvider';
import { useDispatch } from 'react-redux';
import {actions} from '@/store/index'
import { redirect,  RedirectType } from "next/navigation";
import EditClient from './EditClient';
import Modal from "react-modal";

export default function Client({data, deleted, edited}) {
  const dispatch = useDispatch()
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const {user, session} = useAuth()
  const [showOptions,setShowOptions] = useState(false)
  const deleteClient = async() => {
    console.log(data.id)
    const res = (await client.from('clients').delete().eq('id', data.id)).statusText
    console.log(res)
    deleted(true)
  }
  const openEditModal = async() => {
      setModalIsOpen(true)
      setShowOptions(!showOptions)
  }
  const openOptions = () => {
      setShowOptions(!showOptions )
  }

   const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    paddingRight: '5%',
    width: '60%',
    height: '80%',
    borderRadius: '2%',
    transform: 'translate(-50%, -50%)',
  },
};
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }
   function openModal() {
    setModalIsOpen(true);
  }
  function closeModal(){
    setModalIsOpen(false)
  }
 

  const createInvoiceForUser = async(data) => {
      dispatch(actions.updateInvoiceRecipient(data))
      redirect('/Dashboard/invoices/Upload')
  }
  return (
    <div className='flex flex-col border text-sm border-gray-200 rounded-md shadow-2xs w-fit py-[1em] pl-[1em] pr-[2em]'>

       <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
                <EditClient data={data} closeModal={closeModal} edited={edited}> </EditClient>
      
            </Modal>
      
      <div className="flex flex-row gap-[1em] mb-[2em]">
        {/* <Image src="/male1.png" alt='profile' width={50} height={50} className='rounded-full'></Image> */}

        <div className= 'rounded-full inline-flex bg-purple-600 w-[2.5em] h-[2.5em] pl-[.45em] p-[.5em] font-bold  text-base text-white'
       >
          <p className='mt'>
           {data.client_name.split(' ')[0][0] + data.client_name.split(' ')[1][0]}
            </p>
        </div>
        <div className="flex flex-col">
            <p className='font-bold'>{data.client_name}</p>
            <p className='text-gray-500'>{data.client_email}</p>
        </div>
        <SlOptionsVertical onClick={openOptions} className='mt-3 ml-1 '/>
      
      </div>
      {
        showOptions?
        <div className="options flex flex-col gap-[.1em] h-[8.5em] mb-[1em] absolute py-[1em] px-[em] rounded-md border w-fit bg-white border-gray-200 top-[3.5em] ml-[12em]">
         
          <div onClick={() => createInvoiceForUser(data)} className="inline-flex gap-[.5em] py-[.5em] px-[1em] hover:bg-gray-50 text-purple-500 ml-0">
            <AiOutlinePlus  className='text-xl '/>
            <p className='text-xs'>Create an invoice</p>
          </div>
        
           <div onClick={openEditModal} className="inline-flex gap-[.5em] py-[.5em] px-[1em] hover:bg-gray-50 text-blue-500 ml-0">
            <AiFillEdit className='text-xl '/>
            <p className='text-xs'>Edit</p>
          </div>
        
      
            <div onClick={deleteClient} className="inline-flex gap-[.5em] py-[.5em] px-[1em] hover:bg-gray-50 text-red-500 ml-0">
                <AiFillDelete/>
            <p className='text-xs'>Delete</p>
          </div>
        </div>
:''}
      <hr />
<div className='flex flex-row justify-between'>

      <div className="inline-flex gap-[.5em] mt-[1em] text-[#8b8b8b]">
        <BsTelephone className='mt-1'/>
        <p>{data.client_phonenumber}</p>
      </div>
<div className="inline-flex text-blue-500 mt-[1em]">

      <p className=''>See details</p>
      <FaAngleRight className='mt-1' />
</div>


    </div>


</div>
  )
}
