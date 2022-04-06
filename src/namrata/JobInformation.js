import React from 'react';
import {Typography, Grid, Button, IconButton, Box} from '@mui/material';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import JobInfo from '../images/JobInfo.png';
import JobDesc from '../images/JobDesc.png';
import Perks from '../images/Perks.png';
import Divider from '../images/Divider.png'
import JobCardComponent from './JobCardComponent';
import Healthcare from '../images/Healthcare.png';
import Travel from "../images/Travel.png";

import styled from "@emotion/styled"
import { NavLink, useNavigate } from 'react-router-dom';
import Nomad from './Nomad.png';
import Step3 from '../NehaBhagat1/Step3';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Typography1 = styled(Typography)({
  fontFamily:'inter'
})


export default function JobInformation(){
   
  const navigate = useNavigate()
    return(
    <>
  

        <Grid container>
       
       <Grid item xs={4} lg={8.5} display={"flex"}>
         <img src={Nomad} alt={''} style={{paddingLeft:'2%'}} />
         
                            <Typography variant='body2' fontFamily={'poppins'} fontSize={'28PX'} marginLeft={"1%"}><b>Nomad </b></Typography>
                            <IconButton sx={{margin:"-10px" }} ><ExpandMoreIcon  fontSize='large' /></IconButton>
                       </Grid>

         {/* <Grid item xs={2} lg={1} sx={{paddingLeft:'10%'}}>
           <IconButton >
           <NotificationsActiveOutlinedIcon/>
           </IconButton>
         </Grid> */}
         <Grid lg={1}/>

         <Grid item xs={6} lg={2} sx={{paddingLeft:'2%'}}>
         <NavLink to={'/'} style={{textDecoration:'none'}} > <Button variant='contained'
            sx={{borderRadius:'0px', backgroundColor:'#1a50b2',marginTop:'2%',
             ':hover':{color:'#1a50b2',backgroundColor:'white'}
            }}
           >Back to Home</Button></NavLink>
         </Grid>
         <Grid item xs={12} >
         <hr/>
         </Grid>
        
         
         <Grid container>
           <Grid item xs={12} lg={0.5} sx={{marginLeft:'1%'}}>
           <IconButton>
           <ArrowBackOutlinedIcon/>
           </IconButton>
           </Grid>

           <Grid item xs={12} lg={11} sx={{marginTop:'0.2%'}}>
           <Typography1 variant='h5'><b>
           Post a Job
           </b>
           
           
           </Typography1>
           
           </Grid>

           <Box sx={{border:'1px solid #e5e5e5', width:'99%', margin:'1% 5%'}}>
           <Grid container sx={{display:'flex', padding:'2% 6%'}}>
              <Grid item xs={12} lg={1}/>
               <Grid item xs={12} lg={3} sx={{display:'flex', paddingLeft:'1%' }}>
                 <Grid>
                  <img src={JobInfo} alt='image'/>
                  </Grid>
                  <Grid sx={{padding:'1% 3%'}}>
                  <Typography1 color='#1a50b2'><b>Step 1/3</b></Typography1>
                  <Typography1><b>Job Information</b></Typography1>
                  </Grid>  
               </Grid>  

               <Grid item xs={12} lg={1}>
                 <img src={Divider} alt='image'/>
               </Grid>


               <Grid item xs={12} lg={3} sx={{display:'flex'}}>
                 <Grid>
                  <img src={JobDesc} alt='image'/>
                  </Grid>
                  <Grid sx={{padding:'1% 3%'}}>
                  <Typography1 color='#1a50b2'><b>Step 2/3</b></Typography1>
                  <Typography1><b>Job Description</b></Typography1>
                  </Grid>  
               </Grid>  

               <Grid item xs={12} lg={1}>
               <img src={Divider} alt='image'/>
             </Grid>
               

               <Grid item xs={12} lg={3} sx={{display:'flex'}}>
                 <Grid>
                  <img src={Perks} alt='image'/>
                  </Grid>
                  <Grid sx={{padding:'1% 3%'}}>
                  <Typography1 color='#1a50b2'><b>Step 3/3</b></Typography1>
                  <Typography1><b>Perks and Benefits</b></Typography1>
                  </Grid>  
               </Grid>  
               
               
               

            </Grid>
           
           </Box>

           <Step3/>
         
         
         </Grid>
      

        
         
          
     
        </Grid>
          </>
    );
}