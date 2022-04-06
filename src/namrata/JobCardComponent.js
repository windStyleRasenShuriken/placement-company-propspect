import React from 'react';
import { Typography, Grid, Card, Button, Box, IconButton } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import styled from "@emotion/styled"


const Typography1 = styled(Typography)({
  fontFamily:'inter'
})


export default function JobCardComponent({image, topic, content}){
    return (
          
         <Card sx={{width:'90%', height:'80%', padding:'3%', marginBottom:'10%'}}>
          <Grid container >  
             <Grid item xs={10} lg={11}>
               <img src={image} alt='icon' />
             </Grid>

             <Grid item xs={2} lg={1}>
              <IconButton>
                <CloseOutlinedIcon/>
              </IconButton>
             </Grid>

             <Grid item xs={12} sx={{marginBottom:'5%'}} >
               <Typography1><b>{topic}</b></Typography1>
             </Grid>

             <Grid item xs={10} sx={{marginBottom:'5%'}}>
             <Typography1>{content}</Typography1>
             </Grid>
          </Grid>
         </Card>
         
    )
}