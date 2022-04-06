import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid, Typography } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Forthdd() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
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
            Categories
          </Typography>
        
        <br/>
          <Typography
            sx={{
              color: "#7C8493",
              fontFamily: "Epilogue",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "18px",
            //   width: "200px"
            }}
          >
            You can select multiple job categories
          </Typography>
        
      </Grid>
      <Grid item xs={2} sm={1}/>
      <Grid item  xs={7} sm={6}>
      <div>
      <FormControl sx={{ m: 1, minWidth: 320 }}>
        <InputLabel id="demo-simple-select-helper-label">Your job category</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Management</MenuItem>
          <MenuItem value={20}>Front-end</MenuItem>
          <MenuItem value={30}>Back-end</MenuItem>
        </Select>
      </FormControl>
    </div>
      </Grid>
      
    </Grid>
  );
}
