import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedUser = ({children}) => {
    const{user}=useSelector((state)=>({...state.authentication}))
    if(!user?.token){
        return <Navigate to={'/login'} replace="true"></Navigate>
    }

    return children
}

export default ProtectedUser