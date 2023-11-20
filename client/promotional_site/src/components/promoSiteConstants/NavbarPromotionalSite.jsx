import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TemporaryDrawer from './SidebarPromotionalSite'
import DownloadIcon from '@mui/icons-material/Download';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Logo from '../../assets/logosiyah.png'

export default function ButtonAppBar() {

  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position='fixed' style={{backgroundColor:'white',height:70}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:'black'}}>
          <img src={Logo} className='homeLogo'></img>
          </Typography>
          <Button color="inherit" style={{color:'black'}}><DownloadIcon/><b>Download</b></Button>
          <Button color="inherit" style={{color:'black'}}><FavoriteIcon/></Button>
        </Toolbar>
      </AppBar>
       <TemporaryDrawer state={state} setState={setState} toggleDrawer={toggleDrawer} ></TemporaryDrawer> 
    </Box>
  );
}