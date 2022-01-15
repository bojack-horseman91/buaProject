import { Button, Toolbar, Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import {green} from '@mui/material/colors'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { alpha } from '@mui/system';
import { Notifications ,Mail,Cancel} from '@mui/icons-material';
import { useState } from 'react';
import Image from 'mui-image';
import logo from './log.png';
const Root = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      display:"none",
    },
    [theme.breakpoints.up('md')]: {
      display:"block",
    },
   
  }));
  const Root2 = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      display:"block",
    },
    [theme.breakpoints.up('md')]: {
      display:"none",
    },
   
  }));
  const Icons= styled('div')(({ theme,searchBarOpen }) => {
      const display=searchBarOpen?'none':'block';
      return({
          padding: theme.spacing(1),
          justifyContent:'space-between',
          [theme.breakpoints.down('md') ] :{
                    display: display,
          },
        })
      }
  );

const SearchWrap=styled('div')(({theme,searchBarOpen})=>{
        const display=searchBarOpen?'flex':'none';

          return ({
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            '&:hover': {
              backgroundColor: alpha(theme.palette.common.white, 0.25),
            }, position: 'static',
            marginLeft: 0,
            float:"right",
            display: display,
            alignItems: 'center',
            justifyContent: 'space-between',
            color:'white',
            borderRadius:theme.shape.borderRadius,
            [theme.breakpoints.up('sm')]:{display: 'flex',},
        });
    }
);

const SearchIcon2=styled(SearchIcon)(({theme,searchBarOpen})=>{
        const display=searchBarOpen?'none':'flex';
        return ({
          display:display,
          [theme.breakpoints.up('sm')]:{display:'none',},
      }) 
    }
)

const CancelIcon=styled(Cancel)(({searchBarText})=>{
        const display=searchBarText==""?'none':'block';
        const s=searchBarText;
        console.log(s.length);
        return ({
          display:display
        })
      }
);

function NavBar() {
    const [searchBarOpen,cngOpen]=useState(false);
    const [searchBarText,setSearchBarText]=useState('');

    return (
        <AppBar position='fixed' style={{color:"white"}}>
            <Toolbar style={{justifyContent:'space-between'}}>
                <Root>
                {/* <Typography  variant="h5">
                    
                </Typography> */}

                <img src={logo} height='50'/>
                </Root>
                <Root2>
                <Typography  variant="h5" >
                    Saka 
                </Typography></Root2>
                <SearchWrap searchBarOpen={searchBarOpen} style={{width:'50%'}} >
                    <SearchIcon style={{marginRight:2}}/>
                    <InputBase value={searchBarText} onChange={(e)=>setSearchBarText(e.target.value)} style={{width:'100%',color:'white'}} placeholder="Search...."></InputBase>

                    <CancelIcon searchBarText={searchBarText} onClick={()=>{cngOpen(false);setSearchBarText('')}}  />
                </SearchWrap>
                <SearchIcon2 searchBarOpen={searchBarOpen} onClick={()=>cngOpen(!searchBarOpen)}/>
                {/*THE ICON PART */}
                <Icons searchBarOpen={searchBarOpen} >
                    <Badge badgeContent={4} color="secondary" style={{marginRight:10}}>
                        <Mail style={{color:'white'}} />
                    </Badge>
                    <Badge badgeContent={4} color="secondary">
                        <Notifications style={{color:'white'}} />
                    </Badge>
                </Icons>
                
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;