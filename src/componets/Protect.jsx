import React, { useContext } from 'react'
import { authcontext } from './context'
import { Navigate } from 'react-router-dom'

const Protect = ({children}) => {
    const {islogin,setislogn}=useContext(authcontext)
 if(islogin){
    return children
 }else{
    return <Navigate to='/'/>
 }
}

export default Protect
