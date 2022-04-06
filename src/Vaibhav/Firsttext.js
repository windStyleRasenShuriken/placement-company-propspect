import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid, Typography } from "@mui/material";

export default function Firsttext() {
  return (
    <Grid item container xs={12} spacing={2} sx={{display: 'flex'}}>
      <Grid item container xs={3} sm={5} md={5}>
        <Grid item xs={12}>
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
            Job titles must be describe one position
          </Typography>
        </Grid>
      </Grid>
      <Grid item container xs={2} sm={1} md={1}></Grid>
      <Grid item container xs={4} sm={6} md={6} sx={{display: 'block'}}>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          <TextField fullWidth label="e.g. Software Engineer" id="fullWidth" />
        </Box>
        <Typography
          sx={{
            color: "#7C8493",
            fontFamily: "Epilogue",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "18px",
          }}
        >
          At least 80 characters
        </Typography>
      </Grid>
      <Grid item container xs={3}></Grid>
    </Grid>
  );
}
