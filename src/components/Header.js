import { AppBar, MenuList, createTheme, makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { MenuItem } from '@mui/material';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { Navigate, useNavigate } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { Cryptostate } from '../CryptoContext';
const useStyles=makeStyles(()=>({
title: {
  flex: 1,
  // spread to its full width 
  color: "gold",
  fontFamily: "Montserrat",
  fontWeight: "bold",
  cursor: "pointer",
}


}))
const Header = () => {

  const classes=useStyles();
  
  const darkTheme=createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  const {currency,setcurrency}=Cryptostate()

console.log(currency);
  return (
    <ThemeProvider theme={darkTheme}> 
   
    
     <AppBar color='transparent' position='static'>
     {/* creates an appbar  */}
<container>  
{/* gives responsiveness */}
<toolbar>
{/* create a toolbar */}
<Typography className={classes.title}>
{/* used when we add text or something */}
  Crypto Admirer
  <Select labelId="demo-simple-select-label" id="demo-simple-select" variant="outlined" style={{ width: 100,height: 40,marginLeft: 25}} value={currency} label="currency" onChange={(e)=>setcurrency(e.target.value)} > 
  <MenuItem value={"USD"}>USD</MenuItem>                  
                  <MenuItem value={"INR"}>INR</MenuItem> 
                  </Select>
</Typography>
</toolbar>



</container>

     </AppBar>
     </ThemeProvider>

   
  )
}

export default Header



