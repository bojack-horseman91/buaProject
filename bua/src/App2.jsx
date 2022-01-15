import { Typography} from '@mui/material'
import Grid from '@mui/material/Grid'
import {styled} from '@mui/styles'
import NavBar from './components/navBar'
import SimpleMap from './components/map'
import LeftBar from './components/leftBar2'
import useGeoLocation from './components/getLocation'

function App2() {
    const s=useGeoLocation()
    console.log(s)
    return (
        <Grid container>
            <Grid item xs={12}>
                <NavBar/>
            </Grid>
           <LeftBar/>
            <Grid item xs={8} style={{marginTop:80}}>
                <SimpleMap location={s}/>
            </Grid>

        </Grid>
      );
}

export default App2;