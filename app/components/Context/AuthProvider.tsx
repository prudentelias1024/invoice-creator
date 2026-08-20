'use client'
import { createContext , useState, useEffect, useContext} from "react";
import type { ReactNode } from "react";
import client from '../../api/Client'
import type { Session, User } from '@supabase/supabase-js'

type AuthContextValue = {
  user: User | null
  session: Session | null
}

const AuthContext = createContext<AuthContextValue | null>(null)

const AuthProvider = ({children}: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    const [session, setSession] = useState<Session | null>(null)
    const [loading,setLoading] = useState(true)
    const getSession = async () => {
        const {data: {session}} = await client.auth.getSession()
          setSession(session)
      setUser(session?.user || null)
      }
    useEffect(() => {
      getSession()

      const {data: listener} = client.auth.onAuthStateChange((_event, session) => {
        setSession(session)
        setUser(session?.user || null)

      })
       
    return () => listener.subscription.unsubscribe()

      
    },[])

    return (
        <AuthContext.Provider value={{user,session}}
        >
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    return useContext(AuthContext)
}

export {useAuth, AuthProvider}