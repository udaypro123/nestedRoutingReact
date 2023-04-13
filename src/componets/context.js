import { useState } from "react";
import { createContext } from "react";


export const authcontext=createContext();

function ContextProvider({children}){

    const [inputvalue,setinputvalue]=useState("")
    const [password,setpassword]=useState("")
    const [islogin,setislogn]=useState(false)

    return <authcontext.Provider value={{islogin,setislogn,inputvalue,setinputvalue,password,setpassword}}>
        {children}
    </authcontext.Provider>
}

export default ContextProvider;