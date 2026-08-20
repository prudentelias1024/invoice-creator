'use client'
import React, {useState, useEffect} from 'react'
import DashboardNav from '../../components/DashboardNav'
import { useAuth } from '@/app/components/Context/AuthProvider'
import Client from '@/app/components/Client'
import Link from 'next/link'
import { AiOutlinePlus } from 'react-icons/ai'
import Modal from "react-modal";  
import AddClient from '@/app/components/AddClient'
import client from '@/lib/supabase/server'
import EditClient from '@/app/components/EditClient'
const  Clients = () => {
   const [modalIsOpen, setModalIsOpen] = useState(false);
  const [clients, setClients] = useState<any[]>([])
  const auth = useAuth()
  const user = auth?.user ?? null
   const [created, setCreated] = useState(false)
   const [deleted, setDeleted] = useState(false)
   const [edited, setEdited] = useState(false)
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
  const getClients = async() => {
    const res = await client.from('clients').select().eq('added_by', user?.id)
    
    if(res.data){
      setClients(res.data)
    }
  }
  useEffect(() => {
    if(user !== null){
      getClients()
    }              

      Modal.setAppElement('#clients')
   },[user, created])
  return (
    <div className='flex flex-row'>
  
      {
         
            user !== null?
           <DashboardNav fullNav={true} user={user.user_metadata}/>: 
   
           ''
      }

      <div className="clients ml-[15em]" id='clients'>
        <div className='flex flex-row justify-between mr-[3em] mt-[3em] mb-[3em]'>

        <p className="font-bold text-xl">Clients</p>
        <button onClick={openModal}  className='border  inline-flex gap-1.5 bg-purple-500 text-white px-[1em] py-2 rounded-md' >
          <AiOutlinePlus></AiOutlinePlus>
          <p className='text-sm'>Add New Client</p></button>
        </div>

 <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <AddClient closeModal={closeModal} created={setCreated} ></AddClient>

      </Modal>

        <div className="client-group grid grid-cols-3 gap-[2em] mr-[2em]">
        {
         clients.length > 0 ?
          clients.map((client,idx) => {
            return <Client data={client} key={idx} deleted={setDeleted} edited={setEdited} />
          }): <div className='inline-flex gap-2 justify-center w-full my-[4em] lg:mx-[15em]'>

                        <p className='text-[#c5c5c5] ml-[1em] lg:ml-0'>No Client added yet</p>
                  
                    </div>
        }
       
        </div>
      </div>
                 
    </div>
  )
}

export default Clients
