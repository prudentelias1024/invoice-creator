'use client'
import { createContext , useState, useEffect, useContext} from "react";
import client from '../../api/Client'

const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [session, setSession] = useState(null)
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