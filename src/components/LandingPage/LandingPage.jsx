import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
//MATERIAL UI IMPORT
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Paper from '@mui/material/Paper';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  // const [heading, setHeading] = useState('Welcome to What-a-to-do!');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2 style={{'margin':'20px','padding-top':'40px','font-family':'Poiret One', 'font-size':'30px'}}>Welcome to</h2>
      <Box
        component="img"
        sx={{
          height: 'auto',
          width: 'auto',
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
          position: 'absolute',
          'top':'110px',
          'left':'30px'
        }}
        alt="The house from the offer."
        src="/img/templogo.png"
                                />
      {/* <h2 style={{'margin':'20px','font-family':'Poiret One', 'font-size':'90px', position: 'absolute', 'top':'90px'}}>What-</h2>
      <h2 style={{'margin':'20px','font-family':'Poiret One', 'font-size':'90px', position: 'absolute', 'top':'155px'}}>A-</h2>
      <h2 style={{'margin':'20px','font-family':'Poiret One', 'font-size':'90px', position: 'absolute', 'top':'210px'}}>To-</h2>
      <h2 style={{'margin':'20px','font-family':'Poiret One', 'font-size':'90px', position: 'absolute', 'top':'270px'}}>Do</h2> */}
      <h2 style={{'margin':'20px','padding-top':'250px','font-family':'Poiret One', 'font-size':'20px', 'justify':'center'}}>An app for theatre and psychology enthusiasts that tells you what to do, when you don't know what to do.</h2>
        <div>
        <Button color="warning" size="large" type="submit" variant="contained" size="large" name="submit" value="Log In" style={{'margin-left':'210px','border-radius': '50px', 'font-size':'1.2rem', 'background-color':'#d62828', position: 'absolute', top:'550px', 'font-size':'30px'}} onClick={onLogin}>LOG IN</Button>
        <Button
          type="button"
          size="large"
          type="submit" variant="contained"
          style={{'margin-left':'20px','border-radius': '50px', 'font-size':'1.2rem', 'background-color':'#fcbf49', position: 'absolute', top:'550px', 'font-size':'30px'}}
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </Button>
        </div>
                        
    </div>
  );
}

export default LandingPage;
