import React, { useEffect, useState } from 'react'
import { CoinList } from '../config/api';
import axios from 'axios';
import { Cryptostate } from '../CryptoContext';
const CoinsTable = () => {
    const [coins, setcoins] = useState([]);
    const [loading, setloading] = useState(false);
    const {currency}=Cryptostate();

    const fetchCoins=async()=>{
        setloading(true);
        const {data} =await axios.get(CoinList(currency));
        setcoins(data);
        setloading(false);
    }
    useEffect(() => {
      fetchCoins()
    
      
    }, [currency])
    
  return (
<>
    
</>
  )
}

export default CoinsTable
