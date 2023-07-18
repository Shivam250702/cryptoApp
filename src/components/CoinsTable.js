import React, { useEffect, useState } from 'react'
import { CoinList } from '../config/api';
import axios from 'axios';
import { createTheme } from '@mui/material/styles';
import { Container, TextField, Typography, makeStyles } from '@material-ui/core'
import { Cryptostate } from '../CryptoContext';
import LinearProgress from '@mui/material/LinearProgress';
import { unstable_HistoryRouter } from 'react-router-dom';
import TableCell from '@mui/material/TableCell';
import { ThemeProvider } from 'styled-components';
import { Table, TableContainer, TableHead, TableRow } from '@mui/material';
const CoinsTable = () => {
    const [coins, setcoins] = useState([]);
    const [loading, setloading] = useState(false);
    const [search, setsearch] = useState("")
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
    const darkTheme=createTheme({
      pallete: {
        primary: {
          main: "#fff",
        },
        type: "dark",
      },
    });
    const handleSearch = () => {
      return coins.filter(
        (coin) =>
          coin.name.toLowerCase().includes(search) ||
          coin.symbol.toLowerCase().includes(search)
      );
    };
   
  return (

    <ThemeProvider theme={darkTheme}>
      <Container style={{textAlign: "center"}}>
        <Typography variant="h4" style={{margin:18,fontFamily:"Montserrat"}}>

          Cryptocurrency Prices by MArket cap
        </Typography>

<TextField label="Search for a cryptocurrency" variant='outlined' style={{marginBottom: 20, width: "100%"}} onChange={(e)=>{
  setsearch(e.target.value);
}}/>


<TableContainer>{
      loading?(
        <LinearProgress color="secondary" />
       
      ) :(
<Table>
  <TableHead style={{backgroundColor:"#EEBC1D"}}>
  <TableRow>

  </TableRow>
  {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                    <TableCell
                      style={{
                        color: "black",
                        fontWeight: "700",
                        fontFamily: "Montserrat",
                      }}
                      key={head}
                      align={head === "Coin" ? "" : "right"}
                    >
                      {head}
                    </TableCell>
                  ))}

  </TableHead>
</Table>


      )

}</TableContainer>
      </Container>


    </ThemeProvider>

  )
}

export default CoinsTable
