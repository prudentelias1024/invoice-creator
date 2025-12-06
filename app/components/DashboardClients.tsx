'use client'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import client from '../api/Client'
import { useAuth } from './Context/AuthProvider'

function DashboardClients() {
  const {user, session} = useAuth()
  const [clients,setClients] = useState<Array<string>>([])
   const getClients = async() => {
    const res = await client.from('clients').select().eq('added_by', user.id)
    
    if(res.data){
      setClients([...res.data])
    }
  }
    useEffect(() => {
      getClients()
    },[])
        
  return (

      <div>

        <p className='font-bold text-lg  ml-[.5em] mt-[1em]'>Clients</p>   

        <div className="clients">
             {
                clients.length > 0? 
                       <div className="header lg:grid hidden grid-flow-col grid-cols-5 w-full mt-[1.5em] pl-[2.6em] rounded-t-2xl p-[.5em] font-xs bg-gray-200 text-gray-500 capitalize ">
                      <p>Title</p>
                      <p>Name</p>
                      
                      <p>Email   </p>
                    
                      <p>Phone Number</p>
                      <p>Address</p>
            </div> 

:
''}
</div> 
  {
  clients.length > 0
  ?clients.map((client,idx) =>
      {
     return <div key={idx} className={ idx == clients.length-1?
      "hidden w-full border rounded-b-2xl border-gray-200 ml-0 py-[1em] lg:grid grid-flow-col lg:grid-cols-5 gap-[.1em] mt-0 text-xs":
      "hidden w-full border border-gray-2 00 ml-0 py-[1em] lg:grid grid-flow-col lg:grid-cols-5 gap-[.1em] mt-0 text-xs"
      
     }>
      <p className='ml-[4em]'>{client.client_title}</p>
      <p className='w-fit'>{client.client_name}</p>
      <p className='ml-[1em]'>{client.client_email}</p>
      <p className='ml-[1em]'>{client.client_phonenumber}</p>
    
      <p className='text-wrap w-[20em] text-ellipsis -ml-10'>{client.client_address}</p>
    </div>
 
        })            
  
                   
                    :
                    ''
}
             </div>

  )
}

export default DashboardClients
