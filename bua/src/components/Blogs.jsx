import {styled} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import {Card,CardHeader,CardContent,CardActionArea,CardMedia,Avatar} from '@mui/material';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import Collapse from '@mui/material/Collapse';
import { useState } from 'react';
import img from  './bullshit.png';
const ExpandMoreStyled=styled((props)=>{
    const {expand,...others}=props;
    return <IconButton {...others}/>;
})
(({theme,expand})=>({
        
        transform:!expand?'rotate(0deg)':'rotate(180deg)',
        transition:theme.transitions.create('transform',{
            duration:theme.transitions.duration.shortest,
        }),
        marginLeft:'60%',

    })
);

function Blogs(props) {
    const [expand ,setExpand]=useState(false);

    return (
        <Card  sm={{maxWidth:300}} style={{borderBottom:'1px'}}>
            <CardHeader
            avatar={
                <Avatar sx={{bgcolor:red[500]}}>{props.name.substr(0,1)}</Avatar>
            }
            action={<IconButton><MoreVertIcon/></IconButton>}
            
            />
            <CardMedia  component="img" height="194" alt="bullshit" image={img}/>
            <CardContent>
                <Typography>
                    {props.subtitle}
                </Typography>
            </CardContent>
            <CardActionArea disabledSpacing >
                <IconButton><FavoriteIcon/></IconButton>
                <IconButton><ShareIcon style={{margin:'1px'}}/></IconButton>
                <ExpandMoreStyled expand={expand} onClick={()=>setExpand(!expand)}>
                    <ExpandMoreIcon/>
                </ExpandMoreStyled>
            </CardActionArea>
            <Collapse in ={expand}>
                    <CardContent>
                        <Typography body2>
                            {props.content}
                        </Typography >
                    </CardContent>
            </Collapse>

        </Card>
    );
}

export default Blogs;