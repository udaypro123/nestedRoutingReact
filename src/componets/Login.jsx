import React, { useContext } from 'react'
import {authcontext} from './context'
const Login = () => {

    const {islogin,setislogn,inputvalue,setinputvalue,password,setpassword}=useContext(authcontext)

    function handleclick(){
        if(inputvalue==="uday" && password==="uday@123"){
            setislogn(true)
        }
    }
  return (
    <>
     <div className='logindiv'>
     <div className='formdiv'>
        <div className='inputdiv'>
            <input type="text" placeholder='username' value={inputvalue} onChange={(e)=>{
                setinputvalue(e.target.value)
            }}/>
            <input type="password" placeholder='password' value={password} onChange={(e)=>{
                setpassword(e.target.value)
            }}/>
        </div>
        <button onClick={()=>{handleclick()}}>
            Log in
        </button>

     </div>
     </div>
    </>
  )
}

export default Login
