import React from 'react';
import { Typography, Grid, Button, IconButton, Box } from '@mui/material';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import JobInfo from '../images/JobInfo.png';
import JobDesc from '../images/JobDesc.png';
import DisabledPerks from '../images/DisabledPerks.png';
import Divider from '../images/Divider.png'
import { NavLink, useNavigate } from 'react-router-dom';
import TextDescription from './TextDescription';
import styled from "@emotion/styled";
import Nomad from './Nomad.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Typography1 = styled(Typography)({
  fontFamily: 'inter'
})


export default function JobDescription() {

  const navigate = useNavigate();

  return (

    <Grid container >

      <Grid item xs={4} lg={8.5} display={"flex"}>
        <img src={Nomad} alt={''} style={{ paddingLeft: '2%' }} />

        <Typography variant='body2' fontFamily={'poppins'} fontSize={'28PX'} marginLeft={"1%"}><b>Nomad </b></Typography>
        <IconButton sx={{ margin: "-10px" }} ><ExpandMoreIcon fontSize='large' /></IconButton>
      </Grid>

      {/* <Grid item xs={2} lg={1} sx={{paddingLeft:'10%'}}>
           <IconButton >
           <NotificationsActiveOutlinedIcon/>
           </IconButton>
         </Grid> */}
      <Grid lg={1} />

      <Grid item xs={6} lg={2} sx={{ paddingLeft: '2%' }}>
        <NavLink to={'/'} style={{ textDecoration: 'none' }} > <Button variant='contained'
          sx={{
            borderRadius: '0px', backgroundColor: '#1a50b2', marginTop: '2%',
            ':hover': { color: '#1a50b2', backgroundColor: 'white' }
          }}
        >Back to Home</Button></NavLink>
      </Grid>
      <Grid item xs={12} >
        <hr />
      </Grid>


      <Grid container>
        <Grid item xs={12} lg={0.5} sx={{ marginLeft: '1%' }}>
          <IconButton>
            <ArrowBackOutlinedIcon />
          </IconButton>
        </Grid>

        <Grid item xs={12} lg={11} sx={{ marginTop: '0.2%' }}>
          <Typography1 variant='h5'><b>
            Post a Job
          </b>


          </Typography1>

        </Grid>

        <Box sx={{ border: '1px solid #e5e5e5', width: '99%', margin: '1% 5%' }}>
          <Grid container sx={{ display: 'flex', padding: '2% 6%' }}>
            <Grid item xs={12} lg={1} />
            <Grid item xs={12} lg={3} sx={{ display: 'flex', paddingLeft: '1%' }}>
              <Grid>
                <img src={JobInfo} alt='image' />
              </Grid>
              <Grid sx={{ padding: '1% 3%' }}>
                <Typography1 color='#1a50b2'><b>Step 1/3</b></Typography1>
                <Typography1><b>Job Information</b></Typography1>
              </Grid>
            </Grid>

            <Grid item xs={12} lg={1}>
              <img src={Divider} alt='image' />
            </Grid>


            <Grid item xs={12} lg={3} sx={{ display: 'flex' }}>
              <Grid>
                <img src={JobDesc} alt='image' />
              </Grid>
              <Grid sx={{ padding: '1% 3%' }}>
                <Typography1 color='#1a50b2'><b>Step 2/3</b></Typography1>
                <Typography1><b>Job Description</b></Typography1>
              </Grid>
            </Grid>

            <Grid item xs={12} lg={1}>
              <img src={Divider} alt='image' />
            </Grid>


            <Grid item xs={12} lg={3} sx={{ display: 'flex' }}>
              <Grid>
                <img src={DisabledPerks} alt='image' />
              </Grid>
              <Grid sx={{ padding: '1% 3%' }}>
                <Typography1 color='#1a50b2'><b>Step 3/3</b></Typography1>
                <Typography1><b>Perks and Benefits</b></Typography1>
              </Grid>
            </Grid>




          </Grid>

        </Box>

        <Grid container sx={{ margin: '1% 5%' }}>
          <Grid item xs={12} sx={{ marginBottom: '1%' }}>
            <Typography1><b>
              Details
            </b>
            </Typography1>
          </Grid>

          <Grid item xs={4}>
            <Typography1 sx={{ color: '#7c8493' }}>
              Add the description of the job, responsibilities, who you are and nice-to-haves.
            </Typography1>
          </Grid>

          <Grid item xs={12} sx={{ marginTop: '1%' }}>
            <hr />
          </Grid>

        </Grid>


        <Grid container sx={{ margin: '1% 5%' }}>
          <Grid item xs={12} sx={{ marginBottom: '1%' }}>
            <Typography1><b>
              Job Descriptions
            </b>
            </Typography1>
          </Grid>




          <Grid container>

            <Grid item xs={12} lg={5}>
              <Typography1 sx={{ color: '#7c8493' }}>
                Job titles must describe one <br />
                position.
              </Typography1>
            </Grid>

            <Grid item xs={12} lg={7} sx={{ marginBottom: '2%' }}>
              <TextDescription />
            </Grid>

            <Grid item xs={12}>
              <hr />
            </Grid>

          </Grid>
        </Grid>



        <Grid container sx={{ margin: '1% 5%' }}>
          <Grid item xs={12} sx={{ marginBottom: '1%' }}>
            <Typography1><b>
              Responsibilities
            </b>
            </Typography1>
          </Grid>




          <Grid container>

            <Grid item xs={12} lg={5}>
              <Typography1 sx={{ color: '#7c8493' }}>
                Outline the core responsibilities<br />
                of the position.
              </Typography1>
            </Grid>

            <Grid item xs={12} lg={7} sx={{ marginBottom: '2%' }}>
              <TextDescription />
            </Grid>

            <Grid item xs={12}>
              <hr />
            </Grid>

          </Grid>
        </Grid>


        <Grid container sx={{ margin: '1% 5%' }}>
          <Grid item xs={12} sx={{ marginBottom: '1%' }}>
            <Typography1><b>
              Who You Are
            </b>
            </Typography1>
          </Grid>




          <Grid container>

            <Grid item xs={12} lg={5}>
              <Typography1 sx={{ color: '#7c8493' }}>
                Add your preferred candidates<br />
                qualifications.
              </Typography1>
            </Grid>

            <Grid item xs={12} lg={7} sx={{ marginBottom: '2%' }}>
              <TextDescription />
            </Grid>

            <Grid item xs={12}>
              <hr />
            </Grid>

          </Grid>
        </Grid>

        <Grid container sx={{ margin: '1% 5%' }}>
          <Grid item xs={12} sx={{ marginBottom: '1%' }}>
            <Typography1><b>
              Nice-To-Haves
            </b>
            </Typography1>
          </Grid>




          <Grid container>

            <Grid item xs={12} lg={5}>
              <Typography1 sx={{ color: '#7c8493' }}>
                Add nice-to-have skills and<br />
                qualifications for the role to<br />
                encourage a more diverse set of<br />
                candidates to apply.
              </Typography1>
            </Grid>

            <Grid item xs={12} lg={7} sx={{ marginBottom: '2%' }}>
              <TextDescription />
            </Grid>

            <Grid item xs={12}>
              <hr />
            </Grid>

          </Grid>


          <Grid container sx={{ marginY: '1%' }}>
            <Grid item xs={5} lg={10}>
              <Button variant='contained'
                sx={{
                  borderRadius: '0px', backgroundColor: '#1a50b2', 
                  ':hover': { color: '#1a50b2', backgroundColor: 'white' }
                }}
                onClick={() => navigate('/postajob')}
              >Back</Button>
            </Grid>
            <Grid item xs={7} lg={2}>

              <Button variant='contained'
                sx={{
                  borderRadius: '0px', backgroundColor: '#1a50b2',
                  ':hover': { color: '#1a50b2', backgroundColor: 'white' }
                }}
                onClick={() => navigate('/jobinformation')}
              >Next Step</Button>
            </Grid>
          </Grid>
        </Grid>





      </Grid>






    </Grid>
  )
}