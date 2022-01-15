import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import LeftBar from "./leftBar";
import RightBar from './rightBar'
import MiddleBox from './middleBox'
import NavBar from './navBar'
import { Container } from '@mui/material';
import { useState, useEffect } from 'react';
import instance  from './axios.Instance'
import MyForm from './myForm';
const GridItems=styled(Grid)(({theme})=>({
            marginTop:theme.spacing(10)
        })
)
 

function MainComponent() {
   

    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <NavBar/>
            </Grid>
            <LeftBar/>
            <GridItems item xs={7}>
                {/* <h1>sdfsa</h1>
                <MyForm/> */}
                <MiddleBox/>
            </GridItems>
            <GridItems item xs={3}>
                <RightBar/>
            </GridItems>
            

        </Grid>

      );
}

export default MainComponent;
