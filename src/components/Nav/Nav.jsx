import * as React from 'react';
import {useSelector, useDispatch} from 'react-redux';
// MATERIAL UI IMPORTS 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';

export default function ButtonAppBar() {

  const dispatch = useDispatch();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar style={{'background-color':'#061e2a', 'color':'#fcbf49', 'font-family':'Poiret One'}}>
          <Typography className="logoonavbar" size="large" style={{'font-family':'Poiret One'}} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            WHAT-A-TO-DO
          </Typography>

          <IconButton label="LogOut" size="large" onClick={() => dispatch({ type: 'LOGOUT' })} style={{'color':'#eae2b7', 'font-size':'30px'}}><LogoutIcon/></IconButton>
            

        </Toolbar>
      </AppBar>
    </Box>
  );
}
