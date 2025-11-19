import React from 'react'
import DashboardNav from '../components/DashboardNav'
import DashboardDetails from '../components/DashboardDetails'
import DashboardInvoice from '../components/DashboardInvoice'
import DashboardClients from '../components/DashboardClients'
import DashboardAssets from '../components/DashboardAssets'

function Dashboard() {
  return (
    <div className='flex flex-row'>
      <DashboardNav/>
      <div className="flex flex-col lg:ml-[15em]">

      <div className=" pt-[2em] gap-[1em] grid grid-cols-4 lg:mr-[3em]">
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
