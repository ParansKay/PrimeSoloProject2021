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
  const [heading, setHeading] = useState('Welcome to What-a-to-do!');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2 style={{'padding-top':'40px'}}>{heading}</h2>
      <div>
                <Grid
                    container
                    alignItems="center"
                    justify="center"
                    style={{ width: '100%', height: 'auto'}}
                    >
                <Grid item xs={12}></Grid>
                  <Card className="card" variant="outlined">
                        {/* HEADER */}
                        <CardContent>
                        <div>
          
                          <div>
                          <Button color="warning" type="submit" variant="contained" size="large" name="submit" value="Log In" style={{padding: '15px 30px', 'border-radius': '50px', 'font-size':'1.2rem', 'background-color':'#d62828'}}>LOG IN</Button>
                          </div>
                        </div>
                        </CardContent>
                  </Card>
                </Grid>
      </div>
    </div>
  );
}

export default LandingPage;
