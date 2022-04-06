import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid, Typography } from "@mui/material";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Secondmcq() {
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
            Job Title
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
            Job titles must be describe one position
          </Typography>
        
      </Grid>
      <Grid item xs={2} sm={1}/>
      <Grid item  xs={7} sm={6}>
      <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Full-TIme" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Part-Time" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Remote" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Internship" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Contract" />
    </FormGroup>
      </Grid>
      
    </Grid>
  );
}
