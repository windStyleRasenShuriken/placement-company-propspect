import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid, Typography } from "@mui/material";

export default function Heading() {
  return (
    <Grid item container xs={12}>
      
        <Grid item xs={12}>
          <Typography
            sx={{
              fontFamily: "Epilogue",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "18px",
            }}
          >
            Basic Information
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography
            sx={{
              color: "#7C8493",
              fontFamily: "Epilogue",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "18px",
            }}
          >
            This information will be displayed publicly
          </Typography>
        </Grid>
    
     </Grid>
  );
}
