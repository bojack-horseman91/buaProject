import AppBar from '@mui/material'
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

import Grid from '@mui/material/Grid'


const Items=styled('div')( ({theme})=>{
        return({
            
            alignitems:'center',
            backgroundColor:theme.palette.secondary.main,
            justifyContent:'space-between',
            boxShadow:"1px 3px 0px 1px #dddddd",
            borderBottom:"1px solid  grey",
            padding:theme.spacing(1),
            marginBottom:theme.spacing(2),
            [theme.breakpoints.up('sm')]:{cursor:'pointer'},
            fontWeight:"500"
            
        })
    }
);

const GridItemsWrap=styled(Grid)(({theme})=>({
    marginTop:theme.spacing(10),
    borderRight:".5px solid gray",
    backgroundColor:'beige',
    height:"100vh",
    justifyContent:'space-between',
    
})
)
function LeftBar() {

    return (<GridItemsWrap item xs={2}>
        <Items><HomeIcon/>Home</Items>
        <Items><VideoLibraryIcon/>Videos</Items>
        
        
            
        </GridItemsWrap>);
}

export default LeftBar;