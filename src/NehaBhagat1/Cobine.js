import React from 'react';
import { Grid, Box, Card, Typography, Button, IconButton } from '@mui/material';


import { NavLink, useNavigate } from 'react-router-dom';
import Nav from "../Rohan/Nav" 

import styled from "@emotion/styled";

import Table from './Table';

import InterviewSch from './InterviewSch';



export default function Cobine() {
    const Typography1 = styled(Typography)({
        fontFamily: 'inter'
    })

    const navigate = useNavigate();
    return (

        <Grid container >

            <Grid xs={12} lg={12}><Nav /></Grid>

            <Grid container xs={12} lg={12} >


                <Grid item sx={{ padding: "3% 1% 2% 2%" }} xs={12} lg={3.5}>
                    <Table />
                </Grid>
                <Grid item sx={{ padding: "3% 1% 2% 2%" }} xs={12} lg={8} >
                    <InterviewSch />
                </Grid>

            </Grid>
            {/* <Grid item container style={{ justifyContent: 'end' }} sx={{ padding: "2% 5% 2% 2%" }} xs={12}>
                <Button variant="contained" sx={{
                    borderRadius: '0px', backgroundColor: '#1a50b2',
                    ':hover': { color: '#1a50b2', backgroundColor: 'white' }
                }}
                    onClick={() => navigate('/step2')}>Next Page</Button>
            </Grid> */}

        </Grid>
    );
}