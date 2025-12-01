'use client'
import React, { useEffect } from 'react'
import DashboardNav from '../components/DashboardNav'
import DashboardDetails from '../components/DashboardDetails'
import DashboardInvoice from '../components/DashboardInvoice'
import DashboardClients from '../components/DashboardClients'
import DashboardAssets from '../components/DashboardAssets'
import { useAuth } from '@/app/components/Context/AuthProvider'
import { useDispatch, useSelector } from 'react-redux'
import client from '../api/Client'
import { actions } from '@/store'
function Dashboard() {
  const {user, session} = useAuth()
 
 const dispatch = useDispatch()
 const getLogo = async() => {
    console.log(user )
    const res = await client.from('assets').select().eq('user_id', user.id)
    console.log(res.data,user)
    dispatch(actions.updateAssets(res.data))

  }
  useEffect(() => {
      getLogo()
  },[])
  
 const {assets} = useSelector(state => state)
  console.log(assets) 
 
  return (
    <div className='flex flex-row'>
      {
      user !== null?
      <DashboardNav user={user.user_metadata}/>
      :''
      }
      <div className="flex flex-col lg:ml-[15em]">

      <div className=" gap-[1em] grid grid-cols-2 pt-[6em] pl-[1em] lg:pl-0 lg:pt-0 lg:grid-cols-4 lg:mr-[3em]">
        <DashboardDetails color="white" details='0' title='Total invoices made'/>
        <DashboardDetails color="white" details='0' title='Invoice ( in 30 days ) '/>
        <DashboardDetails color="white" details='0' title='Total Mail sent '/>
        <DashboardDetails color="white" details='$1' title='Total revenue '/>
      </div>
      <DashboardInvoice/>
      <DashboardClients />
      <DashboardAssets/>

    
    </div>
    </div>
  )
}

export default Dashboard
