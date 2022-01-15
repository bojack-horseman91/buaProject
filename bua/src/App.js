import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button'
import { makeStyles } from '@mui/styles';
import orange from '@mui/material/colors/orange'
import EmojiPeople from '@mui/icons-material/EmojiPeople'
import { createTheme,ThemeProvider } from '@mui/material/styles';
import Tool from './components/toolTip'
import MainComponent from './components/MainComponents';

const customTheme=createTheme({
  palette:{
    primary:{
      main:"#000000"
    },
    secondary:{
      main:"#afdfef"
    },
    danger:{
      main:orange[500]
    }
  }
})
function App() {
  
  return (
    <div className="App">
      
      <ThemeProvider theme={customTheme}>
        <MainComponent/>
        <Tool/>
     </ThemeProvider>
    </div>
  );
}

export default App;
