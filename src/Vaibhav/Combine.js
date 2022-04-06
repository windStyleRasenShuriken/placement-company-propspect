import React from 'react';
import Divider from '@mui/material/Divider';
import { Grid, Box, Card, Typography, Button, IconButton } from '@mui/material';
import Firsttext from "./Firsttext";
import Secondmcq from "./Secondmcq";
import Thirdrange from "./Thirdrange";
import Forthdd from "./Forthdd";
import Fifthcc from "./Fifthcc";
import Heading from './Heading';
import { NavLink, useNavigate } from 'react-router-dom';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import JobInfo from '../images/JobInfo.png';

import DisabledPerks from '../images/DisabledPerks.png';
import sticon from "../images/Stepper Icon.png"


import styled from "@emotion/styled";
import Nomad from './Nomad.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function Combine() {
    const Typography1 = styled(Typography)({
        fontFamily: 'inter'
    })

    const navigate = useNavigate();
    return (

        <Grid container >
            <Grid item xs={5} lg={8.5} display={"flex"}>
                <img src={Nomad} alt={''} style={{ paddingLeft: '2%' }} />

                <Typography variant='body2' fontFamily={'poppins'} fontSize={'28px'} marginTop={'5px'} marginLeft={"1%"}><b>Nomad </b></Typography>
                <IconButton style={{ margin: "-10px" }} ><ExpandMoreIcon fontSize='large' /></IconButton>
            </Grid>

            {/* <Grid item xs={2} lg={1} sx={{paddingLeft:'10%'}}>
           <IconButton >
           <NotificationsActiveOutlinedIcon/>
           </IconButton>
         </Grid> */}
            <Grid lg={1} />

            <Grid item xs={5} lg={2} sx={{ paddingLeft: '2%' }}>
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
                            
                        </Grid>


                        <Grid item xs={12} lg={3} sx={{ display: 'flex' }}>
                            <Grid>
                                <img src={sticon} alt='image' />
                            </Grid>
                            <Grid sx={{ padding: '1% 3%' }}>
                                <Typography1 color='#1a50b2'><b>Step 2/3</b></Typography1>
                                <Typography1><b>Job Description</b></Typography1>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} lg={1}>
                           
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
                <Grid item container sx={{ padding: "3% 1% 2% 2%" }} xs={12}>
                    <Heading />
                </Grid>
                <Divider orientation='horizontal' sx={{ fontSize: "6px", border: "0.5px solid rgba(214, 221, 235, 1)", width: "100%"}} />
                <Grid item container sx={{ padding: "2% 1% 2% 2%" }} xs={12}>
                    <Firsttext />
                </Grid>
                <Divider orientation='horizontal' sx={{ fontSize: "6px", border: "0.5px solid rgba(214, 221, 235, 1)", width: "100%"}} />
                <Grid item container sx={{ padding: "2% 1% 2% 2%" }} xs={12}>
                    <Secondmcq />
                </Grid>
                <Divider orientation='horizontal' sx={{ fontSize: "6px", border: "0.5px solid rgba(214, 221, 235, 1)", width: "100%"}} />
                <Grid item container sx={{ padding: "2% 1% 2% 2%" }} xs={12}>
                    <Thirdrange />
                </Grid>
                <Divider orientation='horizontal' sx={{ fontSize: "6px", border: "0.5px solid rgba(214, 221, 235, 1)", width: "100%"}} />
                <Grid item container sx={{ padding: "2% 1% 2% 2%" }} xs={12}>
                    <Forthdd />
                </Grid>
                <Divider orientation='horizontal' sx={{ fontSize: "6px", border: "0.5px solid rgba(214, 221, 235, 1)", width: "100%"}} />
                <Grid item container sx={{ padding: "2% 1% 2% 2%" }} xs={12}>
                    <Fifthcc />
                </Grid>
                <Divider orientation='horizontal' sx={{ fontSize: "6px", border: "0.5px solid rgba(214, 221, 235, 1)", width: "100%"}} />

            </Grid>
            <Grid item container style={{ justifyContent: 'end' }} sx={{ padding: "2% 5% 2% 2%" }} xs={12}>
                <Button variant="contained" sx={{
                    borderRadius: '0px', backgroundColor: '#1a50b2',
                    ':hover': { color: '#1a50b2', backgroundColor: 'white' }
                }}
                    onClick={() => navigate('/step2')}>Next Page</Button>
            </Grid>

        </Grid>
    );
}