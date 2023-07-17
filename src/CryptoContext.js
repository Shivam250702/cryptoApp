import React, { createContext, useContext, useEffect, useState } from 'react'
const crypto=createContext()
const CryptoContext = ({children}) => {
    const [currency, setcurrency] = useState("INR")
    const [symbol, setsymbol] = useState("₹")
    useEffect(()=>{
if(currency==="INR")
setsymbol("₹")
else if(currency==="USD")
setsymbol("$")
    },[currency])
  return (
   <crypto.Provider value={{currency,symbol,setcurrency}}>
 {children}
   </crypto.Provider>
  )
}

export default CryptoContext;

export const Cryptostate=()=>{
    return useContext(crypto);
}
