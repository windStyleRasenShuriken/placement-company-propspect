import * as React from "react";
import { useState } from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from "@mui/material/TextField";
import { Grid, Typography } from "@mui/material";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";



  


    function valuetext(value) {
        return `${value}°C`;
      }
      
      const minDistance = 10;
      
      export default function Thirdrange() {
        const [values, setValues] = useState({
            amount: '',
           
          });
        
          const handleChange = (prop) => (event) => {
            setValues({ ...values, [prop]: event.target.value });
          };



        const [value1, setValue1] = useState([0, 4000]);
      
        const handleChange1 = (event, newValue, activeThumb) => {
          if (!Array.isArray(newValue)) {
            return;
          }
      
          if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
          } else {
            setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
          }
        };
  return (
    <Grid item container spacing={2} sx={{display: 'flex'}}>
    <Grid item xs={3} sm={5}>
        <Typography
          sx={{
            fontFamily: "Epilogue",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "18px",
          }}
        >
          Salary
        </Typography>

        <br />
        <Typography
          sx={{
            color: "#7C8493",
            fontFamily: "Epilogue",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "18px",
              width: "300px"
          }}
        >
         Please specify the estimated salary range for the role. *You can leave this blank
        </Typography>
      </Grid>
      <Grid item xs={2} sm={1}/>
      <Grid item xs={5} sm={6}>
      <Grid item xs={12} sx={{ display: 'flex'}}>
      <div style={{paddingTop:"5%"}}>
 
        <FormControl  sx={{ width:"100px"}}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={value1[0]}
            onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
         
        </FormControl>
         <Typography> to</Typography>
        <FormControl  sx={{  width:"100px" }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={value1[1]}
            onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
        </FormControl>
      </div>
     
    </Grid>
      <Box sx={{  display: 'flex', flexWrap: 'wrap' ,width: 300 }}>
      <Slider
        getAriaLabel={() => "Minimum distance"}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />
    </Box>
      </Grid>
    </Grid>
  );
}

