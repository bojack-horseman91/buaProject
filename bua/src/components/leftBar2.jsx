import AppBar from '@mui/material'
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

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
    
    
})
)
function LeftBar() {

    return (<GridItemsWrap item xs={2}>
        <Items>list</Items>
        <Items><VideoLibraryIcon/>Videos</Items>
        
        
            
        </GridItemsWrap>);
}

export default LeftBar;