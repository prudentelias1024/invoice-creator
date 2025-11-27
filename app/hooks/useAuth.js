import { useContext } from "react";

import { AuthContext  } from "../components/Context/AuthProvider";

const useAuth = () => {
    const context = useContext(AuthContext)
    if(!AuthContext){
        throw new Error('useAuth must be used inside Authprovider')
    }

    return context
}

export default useAuth
