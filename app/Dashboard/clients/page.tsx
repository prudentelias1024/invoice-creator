'use client'
import React from 'react'
import DashboardNav from '../../components/DashboardNav'
import { useAuth } from '@/app/components/Context/AuthProvider'

function Client() {
  const {user, session} = useAuth()
  return (
    <div>
    
                  <DashboardNav user={user.user_metadata}/>
                 
    </div>
  )
}

export default Client
