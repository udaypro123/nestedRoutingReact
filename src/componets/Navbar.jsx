import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { authcontext } from './context'


const Navbar = () => {

  const {islogin,setislogn}=useContext(authcontext)
  return (
    <>
    <div className='linkdiv'>
      <Link to="/">Home</Link>
      <Link to="/products">products</Link>
      <Link to="/contact">contactus</Link>

      <button onClick={()=>{
        setislogn(false)
      }}>logout</button>
    </div>
    </>
  )
}

export default Navbar
