import { Tooltip } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Fab } from '@mui/material';
import { styled } from '@mui/material/styles';


const StyledFab=styled(Fab)((theme)=>({
    postion:'fixed',

}));
function Tool() {
    return ( <Tooltip>
        <StyledFab color='secondary' >
            <AddCircleIcon/>
        </StyledFab>
        
    </Tooltip> );
}

export default Tool;